<?php

namespace App\Http\Controllers\ProcessStep;

use App\Http\Controllers\Controller;
use App\Models\ProcessStep;
use Illuminate\Http\Request;

class GetProcessStepDetailsController extends Controller
{
    public function show($id)
    {
        $processStep = ProcessStep::findOrFail($id);

        return response()->json($processStep);
    }
}
