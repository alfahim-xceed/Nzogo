<?php

namespace App\Http\Controllers\VisaApplication;

use App\Http\Controllers\Controller;
use App\Models\VisaApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CreateVisaApplicationController extends Controller
{
    public function store(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Prepare the data to be validated
        $data = $request->all();
        $data['user_id'] = $user->id;
        $data['citizen_of'] = 9; // Set a default value for citizen_of
        $data['status'] = 'pending'; // Set the default status
        // Convert the travel_date to MySQL date format
        if (isset($data['travel_date'])) {
            $data['travel_date'] = date('Y-m-d', strtotime($data['travel_date']));
        }

        // Validate the request data
        $validator = Validator::make($data, [
            'user_id' => 'required|exists:users,id',
            'citizen_of' => 'required|exists:countries,id',
            'visa_details_id' => 'required|exists:visa_details,id',
            'travel_date' => 'required|date',
            'visa_service_ids' => 'required|array',
            'visa_service_ids.*' => 'required|exists:visa_details_services,id', // Ensure each service ID exists
            'visa_type_id' => 'required|exists:visa_details_visa_types,id',
            'status' => 'required|string|in:pending,approved,rejected',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create the VisaApplication record with validated data
        $visaApplication = VisaApplication::create([
            'user_id' => $data['user_id'],
            'citizen_of' => $data['citizen_of'],
            'visa_details_id' => $data['visa_details_id'],
            'travel_date' => $data['travel_date'],
            'visa_service_ids' => $data['visa_service_ids'],
            'visa_type_id' => $data['visa_type_id'],
            'status' => $data['status'],
        ]);

        return response()->json($visaApplication, 201);
    }
}
