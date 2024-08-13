<?php

namespace App\Http\Controllers\Country;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;

class UpdateCountryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function update(Request $request, $id)
    {

        $user=$request->user();
        
        if ($user->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }



        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $country = Country::findOrFail($id);
        $country->update($validated);

        return response()->json($country);
    }
}
