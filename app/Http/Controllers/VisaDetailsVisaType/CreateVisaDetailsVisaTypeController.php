<?php

namespace App\Http\Controllers\VisaDetailsVisaType;

use App\Http\Controllers\Controller;
use App\Models\VisaDetailsVisaType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CreateVisaDetailsVisaTypeController extends Controller
{
    public function __invoke(Request $request)
    {
        // Define validation rules
        $validator = Validator::make($request->all(), [
            'visa_details_id' => 'required|exists:visa_details,id',
            'visa_type_id' => 'required|exists:visa_types,id',
            'fee' => 'required|string',
            'currency' => 'required|string',
            'processing_time' => 'required|string',
        ]);

        // Check if validation fails
        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        // Create the VisaDetailsVisaType record if validation passes
        $visaDetailsVisaType = VisaDetailsVisaType::create($validator->validated());

        return response()->json($visaDetailsVisaType, 201);
    }
}
