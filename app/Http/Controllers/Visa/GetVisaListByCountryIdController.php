<?php

namespace App\Http\Controllers\Visa;

use App\Http\Controllers\Controller;
use App\Models\Visa;
use Illuminate\Http\Request;

class GetVisaListByCountryIdController extends Controller
{
    public function __invoke(Request $request,$country_id)
    {
        $query = Visa::with(['type', 'category', 'country', 'user']);


        $query->where('country_id', $country_id);




        $visas = $query->get();

        return response()->json($visas);
    }
}
