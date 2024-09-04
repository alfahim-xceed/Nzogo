<?php

namespace App\Http\Controllers\VisaApplication;

use App\Http\Controllers\Controller;
use App\Models\VisaApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UpdateVisaApplicationController extends Controller
{
    public function __invoke(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'sometimes|required|exists:users,id',
            'citizen_of' => 'sometimes|required|exists:countries,id',
            'visa_id' => 'sometimes|required|exists:visas,id',
            'visa_type_id' => 'sometimes|required|exists:visa_types,id',
            'visa_service_ids' => 'sometimes|required|array',
            'visa_service_ids.*' => 'exists:country_services,id',
            'travel_date' => 'sometimes|required|date',
            'status' => 'sometimes|required|string'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $visaApplication = VisaApplication::findOrFail($id);
        $visaApplication->update($request->all());

        return response()->json($visaApplication, 200);
    }
}
