<?php

namespace App\Http\Controllers\RequiredDocument;

use App\Http\Controllers\Controller;
use App\Models\RequiredDocument;

class GetRequiredDocumentDetails extends Controller
{
    public function __invoke($id)
    {
        $requiredDocument = RequiredDocument::with('user')->findOrFail($id);

        return response()->json($requiredDocument);
    }
}
