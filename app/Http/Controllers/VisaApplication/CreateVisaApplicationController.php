<?php

namespace App\Http\Controllers\VisaApplication;

use App\Http\Controllers\Controller;
use App\Models\VisaApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon; // Make sure to import Carbon

class CreateVisaApplicationController extends Controller
{
    public function __invoke(Request $request)
    {
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        // Validate incoming request data
        $validator = Validator::make($request->all(), [
            'visa_id' => 'required|exists:visas,id',
            'visa_type_id' => 'required|exists:visa_types,id',
            'visa_service_ids' => 'required|array',
            'visa_service_ids.*' => 'exists:country_services,id',
            'travel_date' => 'required|date' // Adjust validation format to match ISO 8601
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // Convert the travel date to MySQL-compatible format
        try {
            $travelDate = Carbon::parse($request->input('travel_date'))->format('Y-m-d H:i:s');
        } catch (\Exception $e) {
            return response()->json(['message' => 'Invalid date format'], 422);
        }

        // Create the visa application with user_id and fixed citizen_of value
        $visaApplication = VisaApplication::create([
            'user_id' => $request->user()->id,
            'citizen_of' => 12,
            'visa_id' => $request->input('visa_id'),
            'visa_type_id' => $request->input('visa_type_id'),
            'visa_service_ids' => json_encode($request->input('visa_service_ids')), // Encode array to JSON string
            'travel_date' => $travelDate, // Use the formatted travel date
            'status' => "pending"
        ]);

        return response()->json($visaApplication, 201);
    }
}
