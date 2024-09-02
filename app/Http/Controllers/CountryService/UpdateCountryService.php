<?php

namespace App\Http\Controllers\CountryService;

use App\Http\Controllers\Controller;
use App\Models\CountryService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UpdateCountryService extends Controller
{
    public function __invoke(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'service_id' => 'sometimes|exists:services,id',
            'fee' => 'sometimes|string',
            'currency' => 'sometimes|string',
            'category_id' => 'sometimes|exists:visa_categories,id',
            'country_id' => 'sometimes|exists:countries,id'
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $countryService = CountryService::findOrFail($id);
        $countryService->update($request->all());

        return response()->json($countryService);
    }
}

