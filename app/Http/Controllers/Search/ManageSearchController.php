<?php

namespace App\Http\Controllers\Search;

use App\Models\CategoryCountryRequiredDocument;
use App\Models\CountryService;
use App\Models\Visa;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ManageSearchController extends Controller
{
    public function __invoke(Request $request)
    {
        $country_id = $request->travelling_to_id;
        $category_id = $request->visa_category_id;

        // Fetch CategoryCountryRequiredDocuments
        $categoryCountryRequiredDocumentsQuery = CategoryCountryRequiredDocument::with(['requiredDocument', 'category', 'country', 'user']);

        if ($country_id) {
            $categoryCountryRequiredDocumentsQuery->where('country_id', $country_id);
        }

        if ($category_id) {
            $categoryCountryRequiredDocumentsQuery->where('category_id', $category_id);
        }

        $categoryCountryRequiredDocuments = $categoryCountryRequiredDocumentsQuery->get();

        // Fetch CountryServices
        $countryServicesQuery = CountryService::query()
            ->with(['service', 'category', 'country', 'user'])
            ->select('country_services.*')
            ->join('services', 'country_services.service_id', '=', 'services.id')
            ->addSelect('services.name as service_name'); // Include the service name

        if ($country_id) {
            $countryServicesQuery->where('country_id', $country_id);
        }

        if ($category_id) {
            $countryServicesQuery->where('category_id', $category_id);
        }

        $countryServices = $countryServicesQuery->get();

        // Fetch Visas
        $visasQuery = Visa::with(['type', 'category', 'country', 'user']);

        if ($country_id) {
            $visasQuery->where('country_id', $country_id);
        }

        if ($category_id) {
            $visasQuery->where('category_id', $category_id);
        }

        $visas = $visasQuery->get();

        // Return the combined results
        return new JsonResponse([
            'categoryCountryRequiredDocuments' => $categoryCountryRequiredDocuments,
            'countryServices' => $countryServices,
            'visas' => $visas
        ]);
    }
}
