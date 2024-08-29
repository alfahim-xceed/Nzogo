<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Models\VisaDetails;
use Illuminate\Http\Request;

class ManageSearchController extends Controller
{
    public function __invoke(Request $request)
    {

        // Retrieve visa details matching the provided travelling_to_id and visa_category_id
        $visaDetails = VisaDetails::where('to_country_id', $request->travelling_to_id)
            ->where('visa_category_id', $request->visa_category_id)
            ->with(['fromCountry', 'toCountry', 'visaCategory', 'visaDetailsVisaTypes.visaType', 'documents','visaDetailsService.service']) // Eager load related models
            ->get();

        // Return the result as a JSON response
        return response()->json($visaDetails, 200);
    }
}
