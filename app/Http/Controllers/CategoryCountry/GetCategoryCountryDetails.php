<?php

namespace App\Http\Controllers\CategoryCountry;

use App\Http\Controllers\Controller;
use App\Models\CategoryCountry;
use Illuminate\Http\Response;

class GetCategoryCountryDetails extends Controller
{
    public function __invoke($id)
    {
        $categoryCountry = CategoryCountry::with(['category', 'country', 'user'])->findOrFail($id);

        return response()->json($categoryCountry);
    }
}
