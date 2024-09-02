<?php

namespace App\Http\Controllers\CategoryCountry;

use App\Http\Controllers\Controller;
use App\Models\CategoryCountry;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CreateNewCategoryCountry extends Controller
{
    public function __invoke(Request $request)
    {
        // Check if user is authenticated
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        // Validate the request data
        $validated = $request->validate([
            'category_id' => 'required|exists:visa_categories,id',
            'country_id' => 'required|exists:countries,id',
        ]);

        // Add user_id to validated data
        $validated['user_id'] = $user->id;

        // Create a new CategoryCountry record
        $categoryCountry = CategoryCountry::create($validated);

        // Return the created record with a 201 status
        return response()->json($categoryCountry, Response::HTTP_CREATED);
    }
}
