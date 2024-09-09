<?php

use App\Http\Controllers\CategoryCountryRequiredDocument\CreateCategoryCountryRequiredDocument;
use App\Http\Controllers\CategoryCountryRequiredDocument\UpdateCategoryCountryRequiredDocument;
use App\Http\Controllers\CategoryCountryRequiredDocument\DeleteCategoryCountryRequiredDocument;
use App\Http\Controllers\CategoryCountryRequiredDocument\GetCategoryCountryRequiredDocumentList;
use App\Http\Controllers\CategoryCountryRequiredDocument\GetCategoryCountryRequiredDocumentDetails;
use App\Http\Controllers\CategoryCountryRequiredDocument\GetCategoryCountryRequiredDocumentListByCountryId;
use App\Http\Controllers\CategoryCountryRequiredDocument\GetCategoryCountryRequiredDocumentListByCountryCategoryId;



Route::post('/create', CreateCategoryCountryRequiredDocument::class);
Route::put('/update/{id}', UpdateCategoryCountryRequiredDocument::class);
Route::delete('/delete/{id}', DeleteCategoryCountryRequiredDocument::class);
Route::get('/all', GetCategoryCountryRequiredDocumentList::class);
Route::get('/details/{id}', GetCategoryCountryRequiredDocumentDetails::class);
Route::get('/all/{country_id}', GetCategoryCountryRequiredDocumentListByCountryId::class);
Route::get('/all/{country_id}/{category_id}', GetCategoryCountryRequiredDocumentListByCountryCategoryId::class);


