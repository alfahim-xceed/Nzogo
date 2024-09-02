<?php

namespace App\Http\Controllers\CategoryCountryRequiredDocument;

use App\Http\Controllers\Controller;
use App\Models\CategoryCountryRequiredDocument;
use Illuminate\Http\JsonResponse; // Update the import

class GetCategoryCountryRequiredDocumentDetails extends Controller
{
    public function __invoke($id): JsonResponse // Update the return type
    {
        $categoryCountryRequiredDocument = CategoryCountryRequiredDocument::with(['requiredDocument', 'category', 'country', 'user'])->findOrFail($id);

        return response()->json($categoryCountryRequiredDocument);
    }
}
