<?php

namespace App\Http\Controllers\Nid;

use App\Http\Controllers\Controller;
use App\Models\Nid;
use Illuminate\Support\Facades\Auth;

class GetNidDetailsController extends Controller
{
    public function show($id)
    {
        $user = Auth::user();
        $nid = Nid::findOrFail($id);

        if ($user->role->name !== 'admin' && $nid->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return response()->json($nid);
    }
}
