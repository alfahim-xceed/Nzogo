<?php

use App\Http\Controllers\VisaDetails\{
    CreateVisaDetailsController,
    UpdateVisaDetailsController,
    DeleteVisaDetailsController,
    GetVisaDetailsListController,
    GetVisaDetailsController
};

Route::post('/create', CreateVisaDetailsController::class);
Route::put('/update/{id}', UpdateVisaDetailsController::class);
Route::delete('/delete/{id}', DeleteVisaDetailsController::class);
Route::get('/all', GetVisaDetailsListController::class);
Route::get('/details/{id}', GetVisaDetailsController::class);
