<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Service\GetServiceListController;
use App\Http\Controllers\Service\GetServiceDetailsController;
use App\Http\Controllers\Service\CreateServiceController;
use App\Http\Controllers\Service\UpdateServiceController;
use App\Http\Controllers\Service\DeleteServiceController;

Route::get('/services', [GetServiceListController::class, 'index']);
Route::get('/services/{id}', [GetServiceDetailsController::class, 'show']);

Route::middleware('auth', 'admin')->group(function () {
    Route::post('/services', [CreateServiceController::class, 'store']);
    Route::put('/services/{id}', [UpdateServiceController::class, 'update']);
    Route::delete('/services/{id}', [DeleteServiceController::class, 'destroy']);
});
