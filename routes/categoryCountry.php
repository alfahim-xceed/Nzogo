<?php

use App\Http\Controllers\CategoryCountry\CreateNewCategoryCountry;
use App\Http\Controllers\CategoryCountry\UpdateCategoryCountry;
use App\Http\Controllers\CategoryCountry\DeleteCategoryCountry;
use App\Http\Controllers\CategoryCountry\GetCategoryCountryList;
use App\Http\Controllers\CategoryCountry\GetCategoryCountryDetails;

Route::post('/create', CreateNewCategoryCountry::class);
Route::put('/update/{id}', UpdateCategoryCountry::class);
Route::delete('/delete/{id}', DeleteCategoryCountry::class);
Route::get('/all', GetCategoryCountryList::class);
Route::get('/details/{id}', GetCategoryCountryDetails::class);
