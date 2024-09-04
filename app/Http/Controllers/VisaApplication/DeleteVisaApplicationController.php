<?php

namespace App\Http\Controllers\VisaApplication;

use App\Http\Controllers\Controller;
use App\Models\VisaApplication;

class DeleteVisaApplicationController extends Controller
{
    public function __invoke($id)
    {
        $visaApplication = VisaApplication::findOrFail($id);
        $visaApplication->delete();

        return response()->json(null, 204);
    }
}

