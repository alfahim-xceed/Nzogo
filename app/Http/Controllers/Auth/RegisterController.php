<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    public function register(Request $request)
    {

        // return response()->json(['message' => 'server is running!']);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|string|max:15',
            'password' => 'required|string|min:8',
            'role_id' => 'required|exists:roles,id',  // Validate role_id
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id,  // Assign role_id to user
        ]);

        $token = $user->createToken('YourAppName')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'id' => $user->id,
        ], 201);
    }
}
