<?php

namespace App\Http\Controllers\Country;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;

class GetCountryListController extends Controller
{
   

    public function index()
    {
        $countries = Country::all();
        return response()->json($countries);
    }
}
    