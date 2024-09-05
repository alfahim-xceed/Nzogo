<?php

namespace App\Http\Controllers\Embassy;

use App\Http\Controllers\Controller;
use App\Models\Embassy;
use Illuminate\Http\Request;

class CreateEmbassyController extends Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'address' => 'required|string',
            'phone_number' => 'required|string',
            'email' => 'required|email',
            'website_url' => 'nullable|url',
            'work_schedule' => 'required|string',
            'country_id' => 'required|exists:countries,id',
        ]);

        $embassy = Embassy::create($request->all());

        return response()->json($embassy, 201);
    }
}
