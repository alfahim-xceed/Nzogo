<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class Test extends Controller
{
    public function clear_session()
        {
            // Get the authenticated user
            $user = Auth::user();

            if ($user) {
                // Revoke all tokens for the authenticated user
                $user->tokens()->delete();

                return response()->json(['message' => 'Logged out successfully.']);
            }

            return response()->json(['error' => 'Unauthorized'], 401);
        }

}
