<?php

namespace App\Http\Controllers\Document;

use App\Http\Controllers\Controller;
use App\Models\Document;
use Illuminate\Http\Request;

class GetDocumentListController extends Controller
{
    public function __invoke(Request $request, $visaDetailsId)
    {


        // Fetch documents where visa_details_id matches the provided ID
        $documents = Document::where('visa_details_id', $visaDetailsId)->get();

        return response()->json($documents, 200);
    }
}

