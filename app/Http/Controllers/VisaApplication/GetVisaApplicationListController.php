<?php

namespace App\Http\Controllers\VisaApplication;

use App\Http\Controllers\Controller;
use App\Models\VisaApplication;
use App\Models\CountryService;
use Illuminate\Http\Request;

class GetVisaApplicationListController extends Controller
{
    public function __invoke(Request $request)
    {
        // Fetch visa applications with their related models
        $visaApplications = VisaApplication::with(['user', 'country', 'visa', 'visaType', 'visa.country'])->get();

        // Extract service IDs for each visa application
        $visaServiceIds = $visaApplications->flatMap(function ($application) {
            return json_decode($application->visa_service_ids, true); // Assuming it's stored as JSON
        })->unique()->toArray();

        // Fetch the corresponding CountryService records including their related Service records
        $services = CountryService::whereIn('id', $visaServiceIds)
            ->with('service') // Include the related Service model
            ->get();

        // Prepare a dictionary of services indexed by their IDs
        $serviceDictionary = $services->keyBy('id');

        // Add services to each visa application
        $visaApplications->each(function ($application) use ($serviceDictionary) {
            $serviceIds = json_decode($application->visa_service_ids, true);

            // Add both the CountryService and related Service models
            $application->services = $serviceDictionary->only($serviceIds)->map(function ($countryService) {
                return [
                    'id' => $countryService->id,
                    'service_id' => $countryService->service_id,
                    'fee' => $countryService->fee,
                    'currency' => $countryService->currency,
                    'category_id' => $countryService->category_id,
                    'country_id' => $countryService->country_id,
                    'service' => [
                        'id' => $countryService->service->id,
                        'name' => $countryService->service->name,
                        'description' => $countryService->service->description, // Add more fields if necessary
                    ]
                ];
            });

            // Correctly set the visa_for attribute with the country name
            $application->visa_for = $application->visa->country->name;
        });

        return response()->json($visaApplications, 200);
    }
}
