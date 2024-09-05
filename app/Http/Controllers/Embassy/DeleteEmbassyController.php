<?php

namespace App\Http\Controllers\Embassy;

use App\Http\Controllers\Controller;
use App\Models\Embassy;

class DeleteEmbassyController extends Controller
{
    public function __invoke($id)
    {
        $embassy = Embassy::findOrFail($id);
        $embassy->delete();

        return response()->json(['message' => 'Embassy deleted successfully'], 200);
    }
}

