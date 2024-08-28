<?php

namespace App\Http\Controllers\VisaDetailsVisaType;

use App\Http\Controllers\Controller;
use App\Models\VisaDetailsVisaType;

class DeleteVisaDetailsVisaTypeController extends Controller
{
    public function __invoke($id)
    {
        $visaDetailsVisaType = VisaDetailsVisaType::find($id);

        if (!$visaDetailsVisaType) {
            return response()->json(['message' => 'VisaDetailsVisaType not found'], 404);
        }

        $visaDetailsVisaType->delete();

        return response()->json(['message' => 'VisaDetailsVisaType deleted successfully'], 200);
    }
}
