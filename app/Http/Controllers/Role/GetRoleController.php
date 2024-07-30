<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use App\Models\Role;

class GetRoleController extends Controller
{
    public function show($id)
    {
        $role = Role::findOrFail($id);

        return response()->json($role);
    }
}
