<?php

namespace App\Http\Controllers\Passport;

use App\Http\Controllers\Controller;
use App\Models\Passport;
use Illuminate\Support\Facades\Auth;

class GetPassportDetailsController extends Controller
{
    public function show($id)
    {
        $user = Auth::user();
        $passport = Passport::findOrFail($id);

        if ($user->role->name !== 'admin' && $passport->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return response()->json($passport);
    }
}
