<?php

namespace App\Http\Controllers\CountryService;

use App\Http\Controllers\Controller;
use App\Models\CountryService;
use Illuminate\Http\Request;

class DeleteCountryService extends Controller
{
    public function __invoke($id)
    {
        $countryService = CountryService::findOrFail($id);
        $countryService->delete();

        return response()->json(['message' => 'Country service deleted successfully']);
    }
}

