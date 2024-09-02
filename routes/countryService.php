<?php

use App\Http\Controllers\CountryService\CreateCountryService;
use App\Http\Controllers\CountryService\UpdateCountryService;
use App\Http\Controllers\CountryService\DeleteCountryService;
use App\Http\Controllers\CountryService\GetCountryServiceDetails;
use App\Http\Controllers\CountryService\GetCountryServiceList;

Route::post('/create', CreateCountryService::class);
Route::put('/update/{id}', UpdateCountryService::class);
Route::delete('/delete/{id}', DeleteCountryService::class);
Route::get('/details/{id}', GetCountryServiceDetails::class);
Route::get('/all', GetCountryServiceList::class);


