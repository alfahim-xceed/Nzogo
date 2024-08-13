<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GetUserDetailsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function show(Request $request,$id)
    {
        $authenticatedUser = $request->user();

        // Check if the authenticated user is an admin or the requested user
        if ($authenticatedUser->role->name=="admin" || $authenticatedUser->id == $id) {
            $user = User::findOrFail($id);
            return response()->json($user);
        }

        // Return a forbidden response if not authorized
        return response()->json(['error' => 'Unauthorized'], 403);
    }
}
