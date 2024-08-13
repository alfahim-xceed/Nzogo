<?php

namespace App\Http\Controllers\VisaType;

use App\Http\Controllers\Controller;
use App\Models\VisaType;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UpdateVisaTypeController extends Controller
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

        
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $visaType = VisaType::find($id);

        if ($visaType) {
            $visaType->update($validated);
            return response()->json($visaType);
        } else {
            return response()->json(['message' => 'Visa Type not found'], Response::HTTP_NOT_FOUND);
        }
    }
}
