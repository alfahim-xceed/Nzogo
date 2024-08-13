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

        $user=$request->user();
        
        if ($user->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $service = Service::create($request->all());

        return response()->json($service, 201);
    }
}
