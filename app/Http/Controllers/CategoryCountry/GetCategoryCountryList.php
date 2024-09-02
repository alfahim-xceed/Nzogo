<?php

namespace App\Http\Controllers\CategoryCountry;

use App\Http\Controllers\Controller;
use App\Models\CategoryCountry;
use Illuminate\Http\Request;

class GetCategoryCountryList extends Controller
{
    public function __invoke(Request $request)
    {
        $countryId = $request->query('country_id'); // Retrieve 'country_id' from query parameters

        if ($countryId) {
            // If a country_id is provided, filter by that country_id
            $categoryCountries = CategoryCountry::where('country_id', $countryId)
                ->with('category') // Load the related category
                ->get();
        } else {
            // If no country_id is provided, get all categories and their associated countries
            $categoryCountries = CategoryCountry::with('category') // Load the related category
                ->get();
        }

        // Map to the desired response format
        $categoryNames = $categoryCountries->map(function ($categoryCountry) {
            return [
                'id'=>$categoryCountry->id,
                'category_name' => $categoryCountry->category ? $categoryCountry->category->name : 'N/A',
                'country_id' => $categoryCountry->country_id,
                'country_name'=>$categoryCountry->country?$categoryCountry->country->name:"N/A",
                'user_id' => $categoryCountry->user_id,
            ];
        });

        return response()->json($categoryNames);
    }
}
