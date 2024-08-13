<?php

namespace App\Http\Controllers\Nid;

use App\Http\Controllers\Controller;
use App\Models\Nid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AddNewNidController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nid_number' => 'required|string|max:255',
            'address' => 'required|string',
        ]);

        $user = $request->user();

        $nid = $user->nids()->create($validatedData);

        return response()->json($nid, 201);
    }
}
