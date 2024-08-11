<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Country\GetCountryListController;
use App\Http\Controllers\Country\GetCountryDetailsController;
use App\Http\Controllers\Country\CreateCountryController;
use App\Http\Controllers\Country\UpdateCountryController;
use App\Http\Controllers\Country\DeleteCountryController;

Route::get('/countries', [GetCountryListController::class, 'index']);

Route::middleware('auth')->middleware('admin')->group(function () {
    
    Route::get('/countries/{id}', [GetCountryDetailsController::class, 'show']);
    Route::post('/countries', [CreateCountryController::class, 'store']);
    Route::put('/countries/{id}', [UpdateCountryController::class, 'update']);
    Route::delete('/countries/{id}', [DeleteCountryController::class, 'destroy']);
});
