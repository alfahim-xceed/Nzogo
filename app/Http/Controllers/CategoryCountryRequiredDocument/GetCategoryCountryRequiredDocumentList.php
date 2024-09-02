<?php

namespace App\Http\Controllers\CategoryCountryRequiredDocument;

use App\Http\Controllers\Controller;
use App\Models\CategoryCountryRequiredDocument;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse; // Update the import

class GetCategoryCountryRequiredDocumentList extends Controller
{
    public function __invoke(Request $request): JsonResponse // Update the return type
    {
        $query = CategoryCountryRequiredDocument::with(['requiredDocument', 'category', 'country', 'user']);

        if ($request->has('country_id')) {
            $query->where('country_id', $request->input('country_id'));
        }

        if ($request->has('category_id')) {
            $query->where('category_id', $request->input('category_id'));
        }

        $categoryCountryRequiredDocuments = $query->get();

        return response()->json($categoryCountryRequiredDocuments); // Return JsonResponse
    }
}
