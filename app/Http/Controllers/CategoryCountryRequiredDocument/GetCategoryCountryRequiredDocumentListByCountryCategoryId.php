<?php

namespace App\Http\Controllers\CategoryCountryRequiredDocument;

use App\Http\Controllers\Controller;
use App\Models\CategoryCountryRequiredDocument;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse; // Update the import

class GetCategoryCountryRequiredDocumentListByCountryCategoryId extends Controller
{
    public function __invoke(Request $request,$country_id,$category_id): JsonResponse // Update the return type
    {
        $query = CategoryCountryRequiredDocument::with(['requiredDocument', 'category', 'country', 'user']);

        $query->where('country_id', $country_id);

        $query->where('category_id', $category_id);

        $categoryCountryRequiredDocuments = $query->get();

        return response()->json($categoryCountryRequiredDocuments); // Return JsonResponse
    }
}
