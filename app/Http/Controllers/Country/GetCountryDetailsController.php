<?php

namespace App\Http\Controllers\Country;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;

class GetCountryDetailsController extends Controller
{
    

    public function show($id)
    {
        $country = Country::findOrFail($id);
        return response()->json($country);
    }
}
