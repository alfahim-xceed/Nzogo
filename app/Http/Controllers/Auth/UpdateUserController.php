<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UpdateUserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum'); // Ensure the user is authenticated
    }

    /**
     * Update the specified user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $authenticatedUser = Auth::user();

        // Check if the authenticated user is either the user being updated or an admin
        if ($authenticatedUser->id !== $user->id && $authenticatedUser->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Validate request data
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . $id,
            'phone' => 'sometimes|required|string|max:15',
            'password' => 'sometimes|required|string|min:8',
            'role_id' => 'sometimes|exists:roles,id', // Validate role_id if provided
        ]);

        // If the user is not an admin, prevent them from updating the role field
        if ($authenticatedUser->role->name !== 'admin') {
            unset($validatedData['role_id']);
        }

        if ($request->filled('password')) {
            $validatedData['password'] = Hash::make($request->password);
        }

        $user->update($validatedData);

        return response()->json($user);
    }
}
