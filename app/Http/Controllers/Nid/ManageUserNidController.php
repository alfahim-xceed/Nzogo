<?php

namespace App\Http\Controllers\Nid;

use App\Http\Controllers\Controller;
use App\Models\Nid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ManageUserNidController extends Controller
{
    public function __construct()
    {
        // Ensure the user is authenticated
        $this->middleware('auth');
    }

    public function manage(Request $request)
    {
        // Validation rules for NID
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'nid_number' => 'required|string|max:255',
            'address' => 'required|string',
        ]);

        // Check if the authenticated user is the owner of the NID or an admin
        $user = Auth::user();
        if ($user->id !== $validatedData['user_id'] && $user->role->name!='admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Find or create an NID record for the given user ID
        $nid = Nid::firstOrNew(['user_id' => $validatedData['user_id']]);

        // Update the NID record with the validated data
        $nid->nid_number = $validatedData['nid_number'];
        $nid->address = $validatedData['address'];
        $nid->save();

        // Return the NID record as JSON response
        return response()->json($nid, 200);
    }
}
