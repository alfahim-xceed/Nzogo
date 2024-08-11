<?php

namespace App\Http\Controllers\VisaCategory;

use App\Http\Controllers\Controller;
use App\Models\VisaCategory;
use Illuminate\Http\Request;

class GetVisaCategoryDetailsController extends Controller
{
    public function show($id)
    {
        $visaCategory = VisaCategory::find($id);
        if ($visaCategory) {
            return response()->json($visaCategory);
        }
        return response()->json(['message' => 'Visa category not found'], 404);
    }
}
