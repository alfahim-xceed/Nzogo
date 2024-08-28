<?php

namespace App\Http\Controllers\VisaDetails;

use App\Http\Controllers\Controller;
use App\Models\VisaDetails;

class DeleteVisaDetailsController extends Controller
{
    public function __invoke($id)
    {
        $visaDetails = VisaDetails::findOrFail($id);
        $visaDetails->delete();

        return response()->json(null, 204);
    }
}

