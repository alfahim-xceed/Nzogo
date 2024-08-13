<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;

class GetRoleDetailsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }


    public function show(Request $request, $id)
    {

        $user=$request->user();
        
        if ($user->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $role = Role::findOrFail($id);

        return response()->json($role);
    }
}
