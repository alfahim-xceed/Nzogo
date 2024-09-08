<?php


namespace App\Http\Controllers\CountryService;

use App\Http\Controllers\Controller;
use App\Models\CountryService;
use Illuminate\Http\Request;

class GetCountryServiceListByCountryCategoryId extends Controller
{
    public function __invoke(Request $request,$country_id,$category_id)
    {
        // Start building the query
        $query = CountryService::query()
            ->with(['service', 'category', 'country', 'user'])
            ->select('country_services.*')
            ->join('services', 'country_services.service_id', '=', 'services.id')
            ->addSelect('services.name as service_name'); // Include the service name


        $query->where('country_id', $country_id);


        $query->where('category_id', $category_id);


        // Get the results
        $countryServices = $query->get();

        return response()->json($countryServices);
    }
}
