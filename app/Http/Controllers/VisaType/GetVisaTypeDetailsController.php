<?php

namespace App\Http\Controllers\VisaType;

use App\Http\Controllers\Controller;
use App\Models\VisaType;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class GetVisaTypeDetailsController extends Controller
{
    public function show($id)
    {
        $visaType = VisaType::find($id);

        if ($visaType) {
            return response()->json($visaType);
        } else {
            return response()->json(['message' => 'Visa Type not found'], Response::HTTP_NOT_FOUND);
        }
    }
}
