<?php

namespace App\Http\Controllers\VisaCategory;

use App\Http\Controllers\Controller;
use App\Models\VisaCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CreateVisaCategoryController extends Controller
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

        $visaCategory = VisaCategory::create($validated);
        return response()->json($visaCategory, 201);
    }
}
