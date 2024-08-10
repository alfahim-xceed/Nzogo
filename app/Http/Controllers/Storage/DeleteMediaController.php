<?php

namespace App\Http\Controllers\Storage;

use App\Http\Controllers\Controller;
use App\Models\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage as FileStorage;

class DeleteMediaController extends Controller
{
    public function __construct()
    {
        // Ensure only authenticated users can access this controller
        $this->middleware('auth');
    }

    public function destroy($id)
    {
        $user = Auth::user();
        $media = Storage::findOrFail($id);

        // Check if the user is allowed to delete the media
        $isAdmin = $user->role === 'admin'; // Adjust based on your role logic

        if (!$isAdmin && $media->storable_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Delete the media record and the associated file
        $filePath = $media->location;

        // Remove the file from storage
        if (FileStorage::exists($filePath)) {
            FileStorage::delete($filePath);
        }

        // Delete the media record
        $media->delete();

        return response()->json([
            'message' => 'Media deleted successfully'
        ]);
    }
}
