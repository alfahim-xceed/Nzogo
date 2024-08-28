<?php

namespace App\Http\Controllers\VisaDetails;

use App\Http\Controllers\Controller;
use App\Models\VisaDetails;

class GetVisaDetailsController extends Controller
{
    public function __invoke($id)
    {
        $visaDetails = VisaDetails::findOrFail($id);
        return response()->json($visaDetails, 200);
    }
}
