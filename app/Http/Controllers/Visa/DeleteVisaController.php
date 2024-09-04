<?php

namespace App\Http\Controllers\Visa;

use App\Http\Controllers\Controller;
use App\Models\Visa;

class DeleteVisaController extends Controller
{
    public function __invoke($id)
    {
        $visa = Visa::findOrFail($id);
        $visa->delete();

        return response()->json(['message' => 'Visa deleted successfully.']);
    }
}
