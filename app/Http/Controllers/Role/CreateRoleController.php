<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class CreateRoleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }


    public function store(Request $request)
    {

        $user=$request->user();

        if ($user->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }


        $request->validate([
            'name' => 'required|string|max:255',
        ]);


        $existingRole = Role::where('name', $request->name)->first();

        if ($existingRole) {
            return response()->json(['error' => 'Role already exists.'], 409);
        }

        $role = Role::create($request->all());

        return response()->json($role, 201);
    }
}
