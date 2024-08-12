<?php

namespace App\Http\Controllers\Role;

use App\Http\Controllers\Controller;
use App\Models\Role;

class GetRoleDetailsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('admin');
    }
    public function show($id)
    {
        $role = Role::findOrFail($id);

        return response()->json($role);
    }
}
