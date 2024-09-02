<?php

namespace App\Http\Controllers\RequiredDocument;

use App\Http\Controllers\Controller;
use App\Models\RequiredDocument;
use Illuminate\Http\Request;

class UpdateRequiredDocument extends Controller
{
    public function __invoke(Request $request, $id)
    {
        $requiredDocument = RequiredDocument::findOrFail($id);

        $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string'
        ]);

        $requiredDocument->update($request->all());

        return response()->json($requiredDocument);
    }
}
