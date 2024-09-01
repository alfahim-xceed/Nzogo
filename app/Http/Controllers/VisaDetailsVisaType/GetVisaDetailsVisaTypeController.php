<?php

namespace App\Http\Controllers\VisaDetailsVisaType;

use App\Http\Controllers\Controller;
use App\Models\VisaDetailsVisaType;
use Illuminate\Http\Request;

class GetVisaDetailsVisaTypeController extends Controller
{
    public function __invoke($id)
    {
        $visaDetailsVisaType = VisaDetailsVisaType::find($id);

        if (!$visaDetailsVisaType) {
            return response()->json(['message' => 'VisaDetailsVisaType not found'], 404);
        }

        return response()->json($visaDetailsVisaType, 200);
    }
}