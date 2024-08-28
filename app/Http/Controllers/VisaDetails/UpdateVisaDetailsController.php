<?php

namespace App\Http\Controllers\VisaDetails;

use App\Http\Controllers\Controller;
use App\Models\VisaDetails;
use Illuminate\Http\Request;

class UpdateVisaDetailsController extends Controller
{
    public function __invoke(Request $request, $id)
    {
        $visaDetails = VisaDetails::findOrFail($id);

        $validatedData = $request->validate([
            'from_country_id' => 'sometimes|required|exists:countries,id',
            'to_country_id' => 'sometimes|required|exists:countries,id',
            'visa_category_id' => 'sometimes|required|exists:visa_categories,id',
        ]);

        $visaDetails->update($validatedData);

        return response()->json($visaDetails, 200);
    }
}
