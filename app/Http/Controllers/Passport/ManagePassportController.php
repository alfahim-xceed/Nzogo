<?php

namespace App\Http\Controllers\Passport;

use App\Http\Controllers\Controller;
use App\Models\Passport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ManagePassportController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function manage(Request $request)
    {
        // Validation rules for passport
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'passport_url' => 'nullable|string',
            'passport_given_name' => 'required|string',
            'passport_surname' => 'required|string',
            'passport_number' => 'required|string',
            'passport_expiry_date' => 'required|date', // Change 'datetime' to 'date'
            'date_of_birth' => 'required|date', // Change 'datetime' to 'date'
        ]);

        // Check if the authenticated user is the owner of the passport or an admin
        $user = $request->user();
        if ($user->id != $validatedData['user_id'] && $user->role->name!='admin') {
            return response()->json(['error' => 'Unauthorized','one'=>$user->id,'two'=>$validatedData['user_id']], 403);
        }

        // Find or create a Passport record for the given user ID
        $passport = Passport::firstOrNew(['user_id' => $validatedData['user_id']]);

        // Update the Passport record with the validated data
        $passport->passport_url = $validatedData['passport_url'] ?? "";
        $passport->passport_given_name = $validatedData['passport_given_name'];
        $passport->passport_surname = $validatedData['passport_surname'];
        $passport->passport_number = $validatedData['passport_number'];
        $passport->passport_expiry_date = $validatedData['passport_expiry_date'];
        $passport->date_of_birth = $validatedData['date_of_birth'];
        $passport->save();

        // Return the Passport record as JSON response
        return response()->json($passport, 200);
    }
}
