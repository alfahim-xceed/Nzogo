<?php

namespace App\Http\Controllers\VisaApplication;

use App\Http\Controllers\Controller;
use App\Models\VisaApplication;
use Illuminate\Http\Request;

class DeleteVisaApplicationController extends Controller
{
    public function destroy($id)
    {
        $visaApplication = VisaApplication::findOrFail($id);

        // Optionally, you can add logic to check if the user is authorized to delete this record.

        $visaApplication->delete();

        return response()->json(['message' => 'Visa application deleted successfully'], 200);
    }
}

