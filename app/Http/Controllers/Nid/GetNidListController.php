<?php

namespace App\Http\Controllers\Nid;

use App\Http\Controllers\Controller;
use App\Models\Nid;
use Illuminate\Support\Facades\Auth;

class GetNidListController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $nids = $user->role->name === 'admin' ? Nid::all() : $user->nids;

        return response()->json($nids);
    }
}
