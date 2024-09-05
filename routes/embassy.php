<?php

use App\Http\Controllers\Embassy\CreateEmbassyController;
use App\Http\Controllers\Embassy\UpdateEmbassyController;
use App\Http\Controllers\Embassy\DeleteEmbassyController;
use App\Http\Controllers\Embassy\GetEmbassyListController;
use App\Http\Controllers\Embassy\GetEmbassyDetailsController;
use App\Http\Controllers\Embassy\GetEmbassyListByCountryIdController;


Route::post('/create', CreateEmbassyController::class); // Create embassy
Route::put('/update/{id}', UpdateEmbassyController::class); // Update embassy
Route::delete('/delete/{id}', DeleteEmbassyController::class); // Delete embassy
Route::get('/all', GetEmbassyListController::class); // List all embassies
Route::get('/details/{id}', GetEmbassyDetailsController::class); // Get details of a specific embassy
Route::get('/country/{countryId}', GetEmbassyListByCountryIdController::class);

