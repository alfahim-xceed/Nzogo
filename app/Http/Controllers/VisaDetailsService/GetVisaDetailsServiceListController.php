<?php

namespace App\Http\Controllers\VisaDetailsService;

use App\Http\Controllers\Controller;
use App\Models\VisaDetailsService;
use Illuminate\Http\Request;

class GetVisaDetailsServiceListController extends Controller
{
    public function __invoke(Request $request,$visaDetailsId)
    {
        $visaDetailsServiceList = VisaDetailsService::with('service')
        ->where('visa_details_id',$visaDetailsId)
        ->get();

        // Transform the result to include service name instead of service_id
        $response = $visaDetailsServiceList->map(function ($visaDetailsService) {
            return [
                'id' => $visaDetailsService->id,
                'service_name' => $visaDetailsService->service->name, // Fetch the service name
                'fee' => $visaDetailsService->fee,
                'currency' => $visaDetailsService->currency
            ];
        });

        return response()->json($response, 200);
    }
}

