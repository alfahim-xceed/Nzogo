<?php

namespace App\Http\Controllers\Nid;

use App\Http\Controllers\Controller;
use App\Models\Nid;
use Illuminate\Support\Facades\Auth;

class DeleteNidController extends Controller
{
    public function destroy($id)
    {
        $user = Auth::user();
        $nid = Nid::findOrFail($id);

        if ($user->role->name !== 'admin' && $nid->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $nid->delete();

        return response()->json(['message' => 'NID deleted successfully']);
    }
}
