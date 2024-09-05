<?php

namespace App\Http\Controllers\ProcessStep;

use App\Http\Controllers\Controller;
use App\Models\ProcessStep;
use Illuminate\Http\Request;

class GetProcessStepListByCountryIdController extends Controller
{
    public function index($countryId)
    {
        $processSteps = ProcessStep::where('country_id', $countryId)->get();

        return response()->json($processSteps);
    }
}
