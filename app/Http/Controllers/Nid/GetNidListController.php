<?php

namespace App\Http\Controllers\Nid;

use App\Http\Controllers\Controller;
use App\Models\Nid;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;


class GetNidListController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $nids = $user->role->name === 'admin' ? Nid::all() : $user->nids;

        return response()->json($nids);
    }
}
