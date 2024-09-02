<?php

namespace App\Http\Controllers\CategoryCountry;

use App\Http\Controllers\Controller;
use App\Models\CategoryCountry;
use Illuminate\Http\Response;

class DeleteCategoryCountry extends Controller
{
    public function __invoke($id)
    {
        $categoryCountry = CategoryCountry::findOrFail($id);
        $categoryCountry->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}

