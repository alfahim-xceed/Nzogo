<?php

namespace App\Http\Controllers\Visa;

use App\Http\Controllers\Controller;
use App\Models\Visa;
use Illuminate\Http\Request;

class GetVisaList extends Controller
{
    public function __invoke(Request $request)
    {
        $query = Visa::with(['type', 'category', 'country', 'user']);

        if ($request->has('country_id')) {
            $query->where('country_id', $request->get('country_id'));
        }

        if ($request->has('category_id')) {
            $query->where('category_id', $request->get('category_id'));
        }

        $visas = $query->get();

        return response()->json($visas);
    }
}
