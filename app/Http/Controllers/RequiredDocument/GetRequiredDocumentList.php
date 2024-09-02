<?php

namespace App\Http\Controllers\RequiredDocument;

use App\Http\Controllers\Controller;
use App\Models\RequiredDocument;
use Illuminate\Http\Request;

class GetRequiredDocumentList extends Controller
{
    public function __invoke(Request $request)
    {
        $query = RequiredDocument::query()->with('user');

        // Apply filters if provided
        if ($request->has('user_id')) {
            $query->where('user_id', $request->input('user_id'));
        }

        $requiredDocuments = $query->get();

        return response()->json($requiredDocuments);
    }
}
