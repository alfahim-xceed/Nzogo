<?php

namespace App\Http\Controllers\VisaDetailsService;

use App\Http\Controllers\Controller;
use App\Models\VisaDetailsService;

class DeleteVisaDetailsServiceController extends Controller
{
    public function __invoke($id)
    {
        $visaDetailsService = VisaDetailsService::find($id);

        if (!$visaDetailsService) {
            return response()->json(['message' => 'Visa Details Service not found'], 404);
        }

        $visaDetailsService->delete();

        return response()->json(['message' => 'Visa Details Service deleted successfully'], 200);
    }
}
