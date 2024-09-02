<?php

namespace App\Http\Controllers\CategoryCountryRequiredDocument;

use App\Http\Controllers\Controller;
use App\Models\CategoryCountryRequiredDocument;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse; // Update the import

class UpdateCategoryCountryRequiredDocument extends Controller
{
    public function __invoke(Request $request, $id): JsonResponse // Update the return type
    {
        $validated = $request->validate([
            'requirement_document_id' => 'sometimes|exists:required_documents,id',
            'category_id' => 'sometimes|exists:visa_categories,id',
            'country_id' => 'sometimes|exists:countries,id'
        ]);

        $categoryCountryRequiredDocument = CategoryCountryRequiredDocument::findOrFail($id);
        $categoryCountryRequiredDocument->update($validated);

        return response()->json($categoryCountryRequiredDocument);
    }
}
