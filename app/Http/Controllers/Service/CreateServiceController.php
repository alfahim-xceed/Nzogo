<?php

namespace App\Http\Controllers\Service;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class CreateServiceController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function store(Request $request)
    {
        $user = $request->user();

        if ($user->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        // Validate the request
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        // Check if a service with the same name already exists
        $existingService = Service::where('name', $request->name)->first();

        if ($existingService) {
            return response()->json(['error' => 'Service already exists.'], 409);
        }

        // Create the new service
        $service = Service::create($request->all());

        // Return the newly created service with a 201 status
        return response()->json($service, 201);
    }
}

