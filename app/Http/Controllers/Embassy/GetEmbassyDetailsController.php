<?php

namespace App\Http\Controllers\Embassy;

use App\Http\Controllers\Controller;
use App\Models\Embassy;

class GetEmbassyDetailsController extends Controller
{
    public function __invoke($id)
    {
        $embassy = Embassy::with('country')->findOrFail($id); // Fetch a specific embassy with the related country
        return response()->json($embassy, 200);
    }
}
