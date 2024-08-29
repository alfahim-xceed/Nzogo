<?php

use App\Http\Controllers\VisaApplication\CreateVisaApplicationController;
use App\Http\Controllers\VisaApplication\GetVisaApplicationListController;
use App\Http\Controllers\VisaApplication\DeleteVisaApplicationController;


Route::post('/create-new', [CreateVisaApplicationController::class, 'store']);
Route::get('/all', [GetVisaApplicationListController::class, 'index']);
Route::delete('/delete/{id}', [DeleteVisaApplicationController::class, 'destroy']);

