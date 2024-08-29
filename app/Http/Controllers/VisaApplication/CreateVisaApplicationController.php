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
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'citizen_of' => 'required|exists:countries,id',
            'visa_details_id' => 'required|exists:visa_details,id',
            'travel_date' => 'required|date',
            'visa_service_ids' => 'required|array',
            'visa_type_id' => 'required|exists:visa_details_visa_types,id',
            'status' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $visaApplication = VisaApplication::create($request->all());

        return response()->json($visaApplication, 201);
    }
}

