<?php

namespace App\Http\Controllers\CategoryCountryRequiredDocument;

use App\Http\Controllers\Controller;
use App\Models\CategoryCountryRequiredDocument;
use Illuminate\Http\JsonResponse; // Update the import
use Illuminate\Http\Request; // Add Request import if needed

class DeleteCategoryCountryRequiredDocument extends Controller
{
    public function __invoke($id): JsonResponse // Update the return type
    {
        $categoryCountryRequiredDocument = CategoryCountryRequiredDocument::findOrFail($id);
        $categoryCountryRequiredDocument->delete();

        return response()->json(null, JsonResponse::HTTP_NO_CONTENT); // Return JsonResponse
    }
}
