<?php

namespace App\Http\Controllers\Storage;

use App\Http\Controllers\Controller;
use App\Models\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GetMediaPathController extends Controller
{
    public function __construct()
    {
        // Ensure only authenticated users can access this controller
        $this->middleware('auth');
    }

    public function index($tableId)
    {
        $user = Auth::user();

        // Retrieve the media based on the provided table_id
        $media = Storage::where('storable_id', $tableId)->first();

        if (!$media) {
            return response()->json(['error' => 'Media not found'], 404);
        }

        // Check if the user is allowed to access this media
        $isAdmin = $user->role === 'admin'; // Adjust based on your role logic

        if (!$isAdmin && $media->storable_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return response()->json([
            'media_path' => $media->location
        ]);
    }
}
