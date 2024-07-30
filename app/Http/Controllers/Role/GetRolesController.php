<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use App\Models\Role;

class GetRolesController extends Controller
{
    public function index()
    {
        $roles = Role::all();

        return response()->json($roles);
    }
}
