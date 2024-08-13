<?php

namespace App\Http\Controllers\Passport;

use App\Http\Controllers\Controller;
use App\Models\Passport;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class DeletePassportController extends Controller
{
    public function destroy(Request $request,$id)
    {
        $user = $request->user();
        $passport = Passport::findOrFail($id);

        if ($user->role->name !== 'admin' && $passport->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $passport->delete();

        return response()->json(['message' => 'Passport deleted successfully']);
    }
}
