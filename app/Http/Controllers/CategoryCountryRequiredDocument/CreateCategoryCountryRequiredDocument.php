<?php

namespace App\Http\Controllers\CategoryCountryRequiredDocument;

use App\Http\Controllers\Controller;
use App\Models\CategoryCountryRequiredDocument;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse; // Update the import

class CreateCategoryCountryRequiredDocument extends Controller
{
    public function __invoke(Request $request): JsonResponse // Update the return type
    {
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], JsonResponse::HTTP_UNAUTHORIZED);
        }

        $validated = $request->validate([
            'requirement_document_id' => 'required|exists:required_documents,id',
            'category_id' => 'required|exists:visa_categories,id',
            'country_id' => 'required|exists:countries,id'
        ]);
        $validated['user_id'] = $user->id;

        $categoryCountryRequiredDocument = CategoryCountryRequiredDocument::create($validated);

        return response()->json($categoryCountryRequiredDocument, JsonResponse::HTTP_CREATED); // Return JsonResponse
    }
}
