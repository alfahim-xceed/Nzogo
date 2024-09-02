<?php

use App\Http\Controllers\CategoryCountryRequiredDocument\CreateCategoryCountryRequiredDocument;
use App\Http\Controllers\CategoryCountryRequiredDocument\UpdateCategoryCountryRequiredDocument;
use App\Http\Controllers\CategoryCountryRequiredDocument\DeleteCategoryCountryRequiredDocument;
use App\Http\Controllers\CategoryCountryRequiredDocument\GetCategoryCountryRequiredDocumentList;
use App\Http\Controllers\CategoryCountryRequiredDocument\GetCategoryCountryRequiredDocumentDetails;

Route::post('/create', CreateCategoryCountryRequiredDocument::class);
Route::put('/update/{id}', UpdateCategoryCountryRequiredDocument::class);
Route::delete('/delete/{id}', DeleteCategoryCountryRequiredDocument::class);
Route::get('/all', GetCategoryCountryRequiredDocumentList::class);
Route::get('/details/{id}', GetCategoryCountryRequiredDocumentDetails::class);
