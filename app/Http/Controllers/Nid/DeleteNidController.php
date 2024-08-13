<?php

namespace App\Http\Controllers\Nid;

use App\Http\Controllers\Controller;
use App\Models\Nid;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;


class DeleteNidController extends Controller
{
    public function destroy(Request $request,$id)
    {
        $user = $request->user();
        $nid = Nid::findOrFail($id);

        if ($user->role->name !== 'admin' && $nid->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $nid->delete();

        return response()->json(['message' => 'NID deleted successfully']);
    }
}
