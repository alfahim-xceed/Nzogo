<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;


class GetRoleListController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }



    public function index(Request $request)
    {

        $user=$request->user();
        
        if ($user->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        
        $roles = Role::all();

        return response()->json($roles);
    }
}
