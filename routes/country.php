<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Country\GetCountryListController;
use App\Http\Controllers\Country\GetCountryDetailsController;
use App\Http\Controllers\Country\CreateCountryController;
use App\Http\Controllers\Country\UpdateCountryController;
use App\Http\Controllers\Country\DeleteCountryController;

Route::get('/all', [GetCountryListController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/details/{id}', [GetCountryDetailsController::class, 'show']);
    Route::post('/create', [CreateCountryController::class, 'store']);
    Route::put('/update/{id}', [UpdateCountryController::class, 'update']);
    Route::delete('/delete/{id}', [DeleteCountryController::class, 'destroy']);
});
