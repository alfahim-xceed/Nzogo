<?php

namespace App\Http\Controllers\Visa;

use App\Http\Controllers\Controller;
use App\Models\Visa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UpdateVisa extends Controller
{
    public function __invoke(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'type_id' => 'sometimes|exists:visa_types,id',
            'fee' => 'sometimes|string',
            'currency' => 'sometimes|string',
            'processing_time' => 'sometimes|date',
            'category_id' => 'sometimes|exists:visa_categories,id',
            'country_id' => 'sometimes|exists:countries,id'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $visa = Visa::findOrFail($id);
        $visa->update($request->all());

        return response()->json($visa);
    }
}
