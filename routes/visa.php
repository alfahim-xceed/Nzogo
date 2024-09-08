<?php

use App\Http\Controllers\Visa\CreateVisaController;
use App\Http\Controllers\Visa\UpdateVisaController;
use App\Http\Controllers\Visa\DeleteVisaController;
use App\Http\Controllers\Visa\GetVisaDetailsController;
use App\Http\Controllers\Visa\GetVisaListController;

use App\Http\Controllers\Visa\GetVisaListByCountryIdController;

Route::post('/create', [CreateVisaController::class, '__invoke']);
Route::put('/update/{id}', [UpdateVisaController::class, '__invoke']);
Route::delete('/delete/{id}', [DeleteVisaController::class, '__invoke']);
Route::get('/details/{id}', [GetVisaDetailsController::class, '__invoke']);
Route::get('/all', [GetVisaListController::class, '__invoke']);
Route::get('/all/{country_id}', [GetVisaListByCountryIdController::class, '__invoke']);

