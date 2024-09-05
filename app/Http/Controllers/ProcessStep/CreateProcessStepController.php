<?php

namespace App\Http\Controllers\ProcessStep;

use App\Http\Controllers\Controller;
use App\Models\ProcessStep;
use Illuminate\Http\Request;
use Illuminate\Http\Response; // Ensure you import this class

class CreateProcessStepController extends Controller
{


    public function store(Request $request)
    {
        // Check if the user is authenticated
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        // Validate request data
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'country_id' => 'required|exists:countries,id'
        ]);

        // Add authenticated user's ID
        $validated['user_id'] = $user->id;

        // Create a new ProcessStep
        $processStep = ProcessStep::create($validated);

        // Return the created ProcessStep with a 201 status code
        return response()->json($processStep, Response::HTTP_CREATED);
    }
}
