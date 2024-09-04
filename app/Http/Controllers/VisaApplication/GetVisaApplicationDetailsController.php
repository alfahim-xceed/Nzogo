<?php

namespace App\Http\Controllers\VisaApplication;

use App\Http\Controllers\Controller;
use App\Models\VisaApplication;

class GetVisaApplicationDetailsController extends Controller
{
    public function __invoke($id)
    {
        $visaApplication = VisaApplication::with(['user', 'country', 'visa', 'visaType', 'services'])->findOrFail($id);

        return response()->json($visaApplication, 200);
    }
}

