<?php

namespace App\Http\Controllers\Service;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class UpdateServiceController extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function update(Request $request, $id)
    {

        $user=$request->user();
        
        if ($user->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        
        $service = Service::find($id);

        if (!$service) {
            return response()->json(['message' => 'Service not found'], 404);
        }

        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $service->update($request->all());

        return response()->json($service);
    }
}
