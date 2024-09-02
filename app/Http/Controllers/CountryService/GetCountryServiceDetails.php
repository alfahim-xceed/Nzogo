<?php

namespace App\Http\Controllers\CountryService;

use App\Http\Controllers\Controller;
use App\Models\CountryService;
use Illuminate\Http\Request;

class GetCountryServiceDetails extends Controller
{
    public function __invoke($id)
    {
        $countryService = CountryService::with(['service', 'category', 'country', 'user'])->findOrFail($id);

        return response()->json($countryService);
    }
}

