<?php

namespace App\Http\Controllers\RequiredDocument;

use App\Http\Controllers\Controller;
use App\Models\RequiredDocument;

class DeleteRequiredDocument extends Controller
{
    public function __invoke($id)
    {
        $requiredDocument = RequiredDocument::findOrFail($id);
        $requiredDocument->delete();

        return response()->json(['message' => 'Required Document deleted successfully']);
    }
}
