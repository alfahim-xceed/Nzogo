<?php

namespace App\Http\Controllers\VisaType;

use App\Http\Controllers\Controller;
use App\Models\VisaType;
use Illuminate\Http\Request;

class GetVisaTypeListController extends Controller
{
    public function index()
    {
        $visaTypes = VisaType::all();
        return response()->json($visaTypes);
    }
}
