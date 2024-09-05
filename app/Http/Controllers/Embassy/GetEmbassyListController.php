<?php

namespace App\Http\Controllers\Embassy;

use App\Http\Controllers\Controller;
use App\Models\Embassy;

class GetEmbassyListController extends Controller
{
    public function __invoke()
    {
        $embassies = Embassy::with('country')->get(); // Fetch all embassies with the related country
        return response()->json($embassies, 200);
    }
}
