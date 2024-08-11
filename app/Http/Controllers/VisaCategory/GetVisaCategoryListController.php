<?php

namespace App\Http\Controllers\VisaCategory;

use App\Http\Controllers\Controller;
use App\Models\VisaCategory;
use Illuminate\Http\Request;

class GetVisaCategoryListController extends Controller
{
    public function index()
    {
        $visaCategories = VisaCategory::all();
        return response()->json($visaCategories);
    }
}
