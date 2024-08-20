<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function logout(Request $request)
    {
        // Revoke the user's current token, if it exists
        if ($request->user()->tokens()->delete()) {
            // $request->user()->currentAccessToken()->delete();
            $request->user()->tokens()->delete();

        }

        // Alternatively, if you want to revoke all tokens for the user:

        return response()->json(['message' => 'Logged out successfully']);
    }
}

