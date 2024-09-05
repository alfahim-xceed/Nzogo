<?php

namespace App\Http\Controllers\ProcessStep;

use App\Http\Controllers\Controller;
use App\Models\ProcessStep;
use Illuminate\Http\Request;

class UpdateProcessStepController extends Controller
{

    public function update(Request $request, $id)
    {

        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'country_id' => 'required|exists:countries,id'
        ]);

        $processStep = ProcessStep::findOrFail($id);
        $processStep->update($validated);

        return response()->json($processStep);
    }
}
