<?php

namespace App\Http\Controllers\Nid;

use App\Http\Controllers\Controller;
use App\Models\Nid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UpdateNidController extends Controller
{
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'nid_number' => 'sometimes|required|string|max:255',
            'address' => 'sometimes|required|string',
        ]);

        $user = Auth::user();
        $nid = Nid::findOrFail($id);

        if ($user->role->name !== 'admin' && $nid->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $nid->update($validatedData);

        return response()->json($nid);
    }
}
