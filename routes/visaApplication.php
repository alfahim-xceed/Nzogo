<?php

use App\Http\Controllers\VisaApplication\CreateVisaApplicationController;
use App\Http\Controllers\VisaApplication\UpdateVisaApplicationController;
use App\Http\Controllers\VisaApplication\DeleteVisaApplicationController;
use App\Http\Controllers\VisaApplication\GetVisaApplicationListController;
use App\Http\Controllers\VisaApplication\GetVisaApplicationDetailsController;

Route::post('/create', CreateVisaApplicationController::class);
Route::put('/update/{id}', UpdateVisaApplicationController::class);
Route::delete('/delete/{id}', DeleteVisaApplicationController::class);
Route::get('/all', GetVisaApplicationListController::class);
Route::get('/details/{id}', GetVisaApplicationDetailsController::class);
