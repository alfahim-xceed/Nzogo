<?php

namespace App\Http\Controllers\Visa;

use App\Http\Controllers\Controller;
use App\Models\Visa;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class CreateVisa extends Controller
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
            'type_id' => 'required|exists:visa_types,id',
            'fee' => 'required|string',
            'currency' => 'required|string',
            'processing_time' => 'required|date_format:Y-m-d H:i:s', // Ensure datetime format
            'category_id' => 'required|exists:visa_categories,id',
            'country_id' => 'required|exists:countries,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], Response::HTTP_BAD_REQUEST);
        }

        // Add the authenticated user's ID to the validated data
        $validatedData = $validator->validated();
        $validatedData['user_id'] = $user->id;

        // Create a new Visa record
        $visa = Visa::create($validatedData);

        // Return the newly created record with a 201 status
        return response()->json($visa, Response::HTTP_CREATED);
    }
}
