<?php

namespace App\Http\Controllers\Visa;

use App\Http\Controllers\Controller;
use App\Models\Visa;

class GetVisaDetails extends Controller
{
    public function __invoke($id)
    {
        $visa = Visa::with(['type', 'category', 'country', 'user'])->findOrFail($id);

        return response()->json($visa);
    }
}
