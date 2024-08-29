<?php

namespace App\Http\Controllers\VisaApplication;

use App\Http\Controllers\Controller;
use App\Models\VisaApplication;
use Illuminate\Http\Request;

class GetVisaApplicationListController extends Controller
{
    public function index(Request $request)
    {
        $visaApplications = VisaApplication::all();

        return response()->json($visaApplications, 200);
    }
}

