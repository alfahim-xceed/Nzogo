<?php

namespace App\Http\Controllers\VisaDetailsVisaType;

use App\Http\Controllers\Controller;
use App\Models\VisaDetailsVisaType;
use Illuminate\Http\Request;

class GetVisaDetailsVisaTypeListController extends Controller
{
    public function __invoke(Request $request,$visaDetailsId)
    {
        $visaDetailsVisaTypeList = VisaDetailsVisaType::with('visaType')
        ->where('visa_details_id',$visaDetailsId)
        ->get()->map(function ($item) {
            return [
                'id' => $item->id,
                'visa_details_id' => $item->visa_details_id,
                'visa_type_name' => $item->visaType->name, // Adjust this if the field is named differently
                'fee' => $item->fee,
                'currency' => $item->currency,
                'processing_time' => $item->processing_time,
            ];
        });

        return response()->json($visaDetailsVisaTypeList, 200);
    }
}
