<?php


namespace App\Http\Controllers\CountryService;

use App\Http\Controllers\Controller;
use App\Models\CountryService;
use Illuminate\Http\Request;

class GetCountryServiceList extends Controller
{
    public function __invoke(Request $request)
    {
        // Start building the query
        $query = CountryService::query()
            ->with(['service', 'category', 'country', 'user'])
            ->select('country_services.*')
            ->join('services', 'country_services.service_id', '=', 'services.id')
            ->addSelect('services.name as service_name'); // Include the service name

        // Apply filters if provided
        if ($request->has('country_id')) {
            $query->where('country_id', $request->input('country_id'));
        }

        if ($request->has('category_id')) {
            $query->where('category_id', $request->input('category_id'));
        }

        // Get the results
        $countryServices = $query->get();

        return response()->json($countryServices);
    }
}


