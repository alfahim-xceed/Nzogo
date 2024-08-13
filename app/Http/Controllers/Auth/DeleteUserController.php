<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DeleteUserController extends Controller
{
    public function deleteUser(Request $request,$id)
    {
        $user = $request->user();

        // Check if the authenticated user is an admin
        if ($user->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Find the user by ID and delete them
        $userToDelete = User::find($id);
        if (!$userToDelete) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $userToDelete->delete();

        return response()->json(['success' => 'User deleted successfully']);
    }
}
