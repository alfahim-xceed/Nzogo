<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Models\Document;

class GetDocumentController extends Controller
{
    public function __invoke($id)
    {
        $document = Document::findOrFail($id);

        return response()->json($document, 200);
    }
}
