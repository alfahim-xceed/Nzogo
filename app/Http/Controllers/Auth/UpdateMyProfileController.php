<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UpdateMyProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum'); // Ensure the user is authenticated
    }

    /**
     * Update the authenticated user's profile.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        // return response()->json(['msg'=>"ok3"]);
        $user = $request->user();

        // Validate request data
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $user->id,
            'phone' => 'sometimes|required|string|max:15',
        ]);

        

        $user->update($validatedData);

        return response()->json($user);
    }
}
