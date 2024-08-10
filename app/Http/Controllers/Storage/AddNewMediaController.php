<?php
namespace App\Http\Controllers\Storage;

use App\Http\Controllers\Controller;
use App\Models\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage as FileStorage;

class AddNewMediaController extends Controller
{
    public function __construct()
    {
        // Ensure only authenticated users can access this controller
        $this->middleware('auth');
    }

    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'file' => 'required|file|mimes:jpeg,png,jpg,pdf,docx|max:2048', // Adjust validation rules as needed
            'table_id' => 'required|integer|exists:users,id', // Ensure the table_id exists in the users table
        ]);

        $user = Auth::user();
        $isAdmin = $user->role === 'admin'; // Adjust based on your role logic

        // Determine the table_id based on user role
        $tableId = $isAdmin ? $validated['table_id'] : $user->id;

        // Handle file upload
        $file = $request->file('file');
        $path = $file->store('media'); // Store the file in the 'media' directory

        // Save the file info in the database
        Storage::create([
            'location' => $path,
            'storable_id' => $tableId,
            'storable_type' => 'App\Models\User', // Adjust this as needed if using different models
        ]);

        return response()->json([
            'path' => $path
        ]);
    }
}
