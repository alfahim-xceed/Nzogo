<?php

namespace App\Http\Controllers\ProcessStep;

use App\Http\Controllers\Controller;
use App\Models\ProcessStep;
use Illuminate\Http\Request;

class DeleteProcessStepController extends Controller
{

    public function destroy($id)
    {


        $processStep = ProcessStep::findOrFail($id);
        $processStep->delete();

        return response()->json(['message' => 'Process step deleted successfully']);
    }
}
