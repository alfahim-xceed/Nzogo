<?php

namespace App\Http\Controllers\VisaType;

use App\Http\Controllers\Controller;
use App\Models\VisaType;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CreateVisaTypeController extends Controller
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

        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $visaType = VisaType::create($validated);

        return response()->json($visaType, Response::HTTP_CREATED);
    }
}
