<?php

namespace App\Http\Controllers\Nid;

use App\Http\Controllers\Controller;
use App\Models\Nid;
use Illuminate\Support\Facades\Auth;

class GetNidDetailsController extends Controller
{
    public function show($user_id)
    {
        // Return a test response to confirm server is running (uncomment if needed for debugging)
        // return response()->json(['message' => 'server is running!!1']);
        
        $user = Auth::user();

        // Find the NID record based on the user ID
        $nid = Nid::where('user_id', $user_id)->first();

        // Check authorization: only admins or the user themselves can access the NID details
        if ($user->role->name !== 'admin' && $nid && $nid->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 200);
        }

        // If no NID record exists for the user, return a default response
        if (!$nid) {
            return response()->json(['nid_number' => '', 'address' => ''], 200);
        }

        return response()->json($nid);
    }
}
