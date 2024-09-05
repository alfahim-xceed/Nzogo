<?php

namespace App\Http\Controllers\Embassy;

use App\Http\Controllers\Controller;
use App\Models\Embassy;
use Illuminate\Http\Request;

class UpdateEmbassyController extends Controller
{
    public function __invoke(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|required|string',
            'address' => 'sometimes|required|string',
            'phone_number' => 'sometimes|required|string',
            'email' => 'sometimes|required|email',
            'website_url' => 'nullable|url',
            'work_schedule' => 'sometimes|required|string',
            'country_id' => 'sometimes|required|exists:countries,id',
        ]);

        $embassy = Embassy::findOrFail($id);
        $embassy->update($request->all());

        return response()->json($embassy, 200);
    }
}
