<?php

namespace App\Http\Controllers\Embassy;

use App\Http\Controllers\Controller;
use App\Models\Embassy;

class GetEmbassyListByCountryIdController extends Controller
{
    public function __invoke($countryId)
    {
        // Fetch embassies related to the specific country ID and eager load the related Country
        $embassies = Embassy::with('country')
            ->where('country_id', $countryId)
            ->get();

        // Return the list of embassies as JSON
        return response()->json($embassies, 200);
    }
}
