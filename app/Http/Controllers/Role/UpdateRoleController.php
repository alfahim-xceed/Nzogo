<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;

class UpdateRoleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function update(Request $request, $id)
    {

        $user=$request->user();
        
        if ($user->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        
        $role = Role::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $role->update($request->all());

        return response()->json($role, 200);
    }
}
