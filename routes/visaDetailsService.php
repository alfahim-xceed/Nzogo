<?php

use App\Http\Controllers\VisaDetailsService\{
    GetVisaDetailsServiceListController,
    GetVisaDetailsServiceController,
    CreateVisaDetailsServiceController,
    UpdateVisaDetailsServiceController,
    DeleteVisaDetailsServiceController
};

Route::get('/all/{visaDetailsId}', GetVisaDetailsServiceListController::class);
Route::get('/details/{id}', GetVisaDetailsServiceController::class);
Route::post('/create', CreateVisaDetailsServiceController::class);
Route::put('/update/{id}', UpdateVisaDetailsServiceController::class);
Route::delete('/delete/{id}', DeleteVisaDetailsServiceController::class);

