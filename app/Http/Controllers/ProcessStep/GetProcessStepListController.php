<?php

namespace App\Http\Controllers\ProcessStep;

use App\Http\Controllers\Controller;
use App\Models\ProcessStep;
use Illuminate\Http\Request;

class GetProcessStepListController extends Controller
{
    public function index()
    {
        // Fetch all process steps with their related country information
        $processSteps = ProcessStep::with('Country')->get();

        // Return the list of process steps as JSON
        return response()->json($processSteps);
    }
}
