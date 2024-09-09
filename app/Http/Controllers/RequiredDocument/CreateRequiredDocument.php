<?php

namespace App\Http\Controllers\RequiredDocument;

use App\Http\Controllers\Controller;
use App\Models\RequiredDocument;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CreateRequiredDocument extends Controller
{
    public function __invoke(Request $request)
    {
        // Check if user is authenticated
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        // Validate the request data (excluding user_id)
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        // Add the authenticated user's ID to the validated data
        $validated['user_id'] = $user->id;

        $existingDocument= RequiredDocument::where('name', $request->name)->first();

        if ($existingDocument) {
            return response()->json(['error' => 'Document already exists.'], 409);
        }

        // Create a new RequiredDocument record
        $requiredDocument = RequiredDocument::create($validated);

        // Return the newly created record with a 201 status
        return response()->json($requiredDocument, Response::HTTP_CREATED);
    }
}
