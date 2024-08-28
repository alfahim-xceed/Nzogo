<?php

namespace App\Http\Controllers\VisaDetails;

use App\Http\Controllers\Controller;
use App\Models\VisaDetails;

class GetVisaDetailsListController extends Controller
{
    public function __invoke()
    {
        $visaDetailsList = VisaDetails::with(['fromCountry', 'toCountry', 'visaCategory'])
            ->get()
            ->map(function ($visaDetails) {
                return [
                    'id' => $visaDetails->id,
                    'from_country_name' => $visaDetails->fromCountry->name,
                    'to_country_name' => $visaDetails->toCountry->name,
                    'visa_category_name' => $visaDetails->visaCategory->name,
                ];
            });

        return response()->json($visaDetailsList, 200);
    }
}

