<?php

namespace App\Http\Controllers\VisaDetailsService;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\VisaDetailsService;

class CreateVisaDetailsServiceController extends Controller
{
    public function __invoke(Request $request)
    {
        $validatedData = $request->validate([
            'visa_details_id' => 'required|exists:visa_details,id',
            'service_id' => 'required|exists:services,id',
            'fee' => 'required|string',
            'currency' => 'required|string',
        ]);

        $visaDetailsService = VisaDetailsService::create($validatedData);

        return response()->json($visaDetailsService, 201);
    }
}
