<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class LogoutController extends Controller
{
    public function logout()
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
