<?php

namespace App\Http\Controllers\VisaApplication;

use App\Http\Controllers\Controller;
use App\Models\VisaApplication;
use App\Models\Country;
use App\Models\Service;
use App\Models\VisaType;
use App\Models\VisaCategory;
use App\Models\VisaDetailsService;
use Illuminate\Http\Request;

class GetVisaApplicationListController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        // Define the relationships you want to load
        $relationships = ['user', 'citizenOf', 'visaDetails', 'visaType'];

        // If the user's role is 'admin', get all visa applications with relationships
        if ($user->role->name == 'admin') {
            $visaApplications = VisaApplication::with($relationships)->get();
        } else {
            // Otherwise, get only the visa applications for this user with relationships
            $visaApplications = VisaApplication::with($relationships)
                ->where('user_id', $user->id)
                ->get();
        }

        // Apply filtering by visa_service_ids if provided
        if ($request->has('visa_service_ids')) {
            $visa_service_ids = $request->input('visa_service_ids');
            $visaApplications = $visaApplications->filter(function ($application) use ($visa_service_ids) {
                return count(array_intersect($application->visa_service_ids, $visa_service_ids)) > 0;
            });
        }

        // Transform the data

        $formattedVisaApplications = $visaApplications->map(function ($application) {


            // Fetch VisaDetailsService records using visa_service_ids
            $visaDetailsServices = VisaDetailsService::whereIn('id', $application->visa_service_ids)->get();

            // Extract service_ids from the VisaDetailsService records
            $serviceIds = $visaDetailsServices->pluck('service_id');

            // Fetch Service details using these service_ids
            $serviceDetails = Service::whereIn('id', $serviceIds)->get();




            return [
                'id' => $application->id,
                'user' => $application->user,
                'citizenOf' => $application->citizenOf,
                'visaDetails' => $application->visaDetails,
                'visaType' => $application->visaType,
                'visa_category_name'=>VisaCategory::find($application->visaDetails->visa_category_id)->name ?? null,
                'visa_type_name' => VisaType::find($application->visaType->visa_type_id)->name ?? null,
                'travel_date' => $application->travel_date,
                'visa_service_ids' => $application->visa_service_ids,
                'status' => $application->status,
                'from_country_name' => Country::find($application->visaDetails->from_country_id)->name ?? null,
                'to_country_name' => Country::find($application->visaDetails->to_country_id)->name ?? null,
                'services' => $serviceDetails, // Include service details
            ];
        });

        return response()->json($formattedVisaApplications, 200);
    }
}
