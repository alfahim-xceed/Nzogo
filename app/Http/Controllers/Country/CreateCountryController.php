<?php

namespace App\Http\Controllers\Country;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;

class CreateCountryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function store(Request $request)
    {
        $user = $request->user();

        if ($user->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'flag_img_url' => 'nullable|url', // Validate flag_img_url as a URL if provided
        ]);

        // Create the country with the validated data
        $country = Country::create($validated);

        return response()->json($country, 201);
    }
}
