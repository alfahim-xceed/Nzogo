<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        // Attempt to authenticate the user
        if (Auth::guard('web')->attempt($credentials)) {
            $user = Auth::guard('web')->user();

            // Create a new token for the authenticated user
            $token = $user->createToken('YourAppName')->plainTextToken;

            // Return the token and user ID in the response
            return response()->json([
                'access_token' => $token,
                'id' => $user->id
            ]);
        }

        // If authentication fails, return an unauthorized error response
        return response()->json(['error' => 'Unauthorized'], 401);
    }
}
