<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // Ensure this line is present

class GetUserInfo extends Controller
{
    public function show(Request $request)
    {
        // Retrieve the authenticated user
        $user = Auth::user();

        // Return the user information as a JSON response
        return response()->json($user);
    }
}
