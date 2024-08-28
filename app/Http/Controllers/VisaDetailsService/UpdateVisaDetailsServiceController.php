<?php

namespace App\Http\Controllers\VisaDetailsService;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\VisaDetailsService;

class UpdateVisaDetailsServiceController extends Controller
{
    public function __invoke(Request $request, $id)
    {
        $validatedData = $request->validate([
            'visa_details_id' => 'required|exists:visa_details,id',
            'service_id' => 'required|exists:services,id',
            'fee' => 'required|string',
            'currency' => 'required|string',
        ]);

        $visaDetailsService = VisaDetailsService::find($id);

        if (!$visaDetailsService) {
            return response()->json(['message' => 'Visa Details Service not found'], 404);
        }

        $visaDetailsService->update($validatedData);

        return response()->json($visaDetailsService, 200);
    }
}
