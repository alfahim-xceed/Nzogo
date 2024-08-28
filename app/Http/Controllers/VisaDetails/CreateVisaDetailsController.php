<?php

namespace App\Http\Controllers\VisaDetails;

use App\Http\Controllers\Controller;
use App\Models\VisaDetails;
use Illuminate\Http\Request;

class CreateVisaDetailsController extends Controller
{
    public function __invoke(Request $request)
    {
        $validatedData = $request->validate([
            'from_country_id' => 'required|exists:countries,id',
            'to_country_id' => 'required|exists:countries,id',
            'visa_category_id' => 'required|exists:visa_categories,id',
        ]);

        $visaDetails = VisaDetails::create($validatedData);

        return response()->json($visaDetails, 201);
    }
}
