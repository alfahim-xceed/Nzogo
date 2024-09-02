<?php

namespace App\Http\Controllers\CategoryCountry;

use App\Http\Controllers\Controller;
use App\Models\CategoryCountry;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UpdateCategoryCountry extends Controller
{
    public function __invoke(Request $request, $id)
    {
        // Check if user is authenticated
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        // Validate the request data (excluding user_id)
        $validated = $request->validate([
            'category_id' => 'required|exists:visa_categories,id',
            'country_id' => 'required|exists:countries,id',
        ]);

        // Find the CategoryCountry record or fail if not found
        $categoryCountry = CategoryCountry::findOrFail($id);

        // Ensure the user is authorized to update the record if necessary
        // For example: if ($categoryCountry->user_id !== $user->id) { ... }

        // Update the CategoryCountry record
        $categoryCountry->update($validated);

        // Return the updated record
        return response()->json($categoryCountry);
    }
}
