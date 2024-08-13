<?php

namespace App\Http\Controllers\Passport;

use App\Http\Controllers\Controller;
use App\Models\Passport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UpdatePassportController extends Controller
{
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'passport_url' => 'sometimes|required|string',
            'passport_given_name' => 'sometimes|required|string|max:255',
            'passport_surname' => 'sometimes|required|string|max:255',
            'passport_number' => 'sometimes|required|string|max:20',
            'passport_expiry_date' => 'sometimes|required|date',
            'date_of_birth' => 'sometimes|required|date',
        ]);

        $user = $request->user();
        $passport = Passport::findOrFail($id);

        if ($user->role->name !== 'admin' && $passport->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $passport->update($validatedData);

        return response()->json($passport);
    }
}
