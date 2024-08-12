<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Service\GetServiceListController;
use App\Http\Controllers\Service\GetServiceDetailsController;
use App\Http\Controllers\Service\CreateServiceController;
use App\Http\Controllers\Service\UpdateServiceController;
use App\Http\Controllers\Service\DeleteServiceController;

Route::get('/all', [GetServiceListController::class, 'index']);
Route::get('/details/{id}', [GetServiceDetailsController::class, 'show']);

Route::middleware('auth', 'admin')->group(function () {
    Route::post('/create', [CreateServiceController::class, 'store']);
    Route::put('/update/{id}', [UpdateServiceController::class, 'update']);
    Route::delete('/delete/{id}', [DeleteServiceController::class, 'destroy']);
});
