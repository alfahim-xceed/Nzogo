<?php

namespace App\Http\Controllers\Passport;

use App\Http\Controllers\Controller;
use App\Models\Passport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddNewPassportController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'passport_url' => 'required|string',
            'passport_given_name' => 'required|string|max:255',
            'passport_surname' => 'required|string|max:255',
            'passport_number' => 'required|string|max:20',
            'passport_expiry_date' => 'required|date',
            'date_of_birth' => 'required|date',
        ]);

        $user = Auth::user();

        $passport = $user->passports()->create($validatedData);

        return response()->json($passport, 201);
    }
}
