<?php

use App\Http\Controllers\VisaDetailsVisaType\GetVisaDetailsVisaTypeListController;
use App\Http\Controllers\VisaDetailsVisaType\GetVisaDetailsVisaTypeController;
use App\Http\Controllers\VisaDetailsVisaType\CreateVisaDetailsVisaTypeController;
use App\Http\Controllers\VisaDetailsVisaType\UpdateVisaDetailsVisaTypeController;
use App\Http\Controllers\VisaDetailsVisaType\DeleteVisaDetailsVisaTypeController;

    Route::get('/all', GetVisaDetailsVisaTypeListController::class);

    // Get details of a specific VisaDetailsVisaType entry by ID
    Route::get('/details/{id}', GetVisaDetailsVisaTypeController::class);

    // Create a new VisaDetailsVisaType entry
    Route::post('/create', CreateVisaDetailsVisaTypeController::class);

    // Update an existing VisaDetailsVisaType entry by ID
    Route::put('/update/{id}', UpdateVisaDetailsVisaTypeController::class);

    // Delete an existing VisaDetailsVisaType entry by ID
    Route::delete('/delete/{id}', DeleteVisaDetailsVisaTypeController::class);

