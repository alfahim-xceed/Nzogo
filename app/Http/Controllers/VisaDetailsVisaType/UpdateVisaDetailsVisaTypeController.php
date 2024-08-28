<?php

namespace App\Http\Controllers\VisaDetailsVisaType;

use App\Http\Controllers\Controller;
use App\Http\Requests\VisaDetailsVisaTypeRequest; // Create a request for validation
use App\Models\VisaDetailsVisaType;

class UpdateVisaDetailsVisaTypeController extends Controller
{
    public function __invoke($id, VisaDetailsVisaTypeRequest $request)
    {
        $visaDetailsVisaType = VisaDetailsVisaType::find($id);

        if (!$visaDetailsVisaType) {
            return response()->json(['message' => 'VisaDetailsVisaType not found'], 404);
        }

        $visaDetailsVisaType->update($request->validated());

        return response()->json($visaDetailsVisaType, 200);
    }
}
