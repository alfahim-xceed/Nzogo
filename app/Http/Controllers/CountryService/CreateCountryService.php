<?php

namespace App\Http\Controllers\CountryService;

use App\Http\Controllers\Controller;
use App\Models\CountryService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class CreateCountryService extends Controller
{
    public function __invoke(Request $request)
    {
        // Check if user is authenticated
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        // Validate the request data
        $validator = Validator::make($request->all(), [
            'service_id' => 'required|exists:services,id',
            'fee' => 'required|string',
            'currency' => 'required|string',
            'category_id' => 'required|exists:visa_categories,id',
            'country_id' => 'required|exists:countries,id',
        ]);

        // Return validation errors if any
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // Get validated data
        $validatedData = $validator->validated();

        // Check if a record with the same service_id, category_id, and country_id already exists
        $existingRecord = CountryService::where([
            'service_id' => $validatedData['service_id'],
            'category_id' => $validatedData['category_id'],
            'country_id' => $validatedData['country_id'],
        ])->first();

        if ($existingRecord) {
            return response()->json(['message' => 'Record already exists.'], Response::HTTP_CONFLICT);
        }

        // Add user_id to validated data
        $validatedData['user_id'] = $user->id;

        // Create a new CountryService record
        $countryService = CountryService::create($validatedData);

        // Return the newly created record with a 201 status
        return response()->json($countryService, Response::HTTP_CREATED);
    }
}
