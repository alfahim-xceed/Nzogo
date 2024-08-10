<?php

namespace App\Http\Controllers\Storage;

use App\Http\Controllers\Controller;
use App\Models\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class UpdateMediaController extends Controller
{
    public function __construct()
    {
        // Ensure only authenticated users can access this controller
        $this->middleware('auth');
    }

    public function update(Request $request, $id)
    {
        // Validate the request
        $validated = $request->validate([
            'file' => 'required|file|mimes:jpeg,png,jpg,pdf,docx|max:2048', // Adjust validation rules as needed
        ]);

        $user = Auth::user();
        $media = Storage::findOrFail($id);

        // Check if the user is allowed to update the media
        $isAdmin = $user->role === 'admin'; // Adjust based on your role logic

        if (!$isAdmin && $media->storable_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Handle file upload
        $file = $request->file('file');
        $path = $file->store('media'); // Store the file in the 'media' directory

        // Update the media record
        $media->update([
            'location' => $path
        ]);

        return response()->json([
            'path' => $path
        ]);
    }
};
