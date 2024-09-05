<?php

use App\Http\Controllers\ProcessStep\CreateProcessStepController;
use App\Http\Controllers\ProcessStep\UpdateProcessStepController;
use App\Http\Controllers\ProcessStep\DeleteProcessStepController;
use App\Http\Controllers\ProcessStep\GetProcessStepDetailsController;
use App\Http\Controllers\ProcessStep\GetProcessStepListController;
use App\Http\Controllers\ProcessStep\GetProcessStepListByCountryIdController;


Route::post('/create', [CreateProcessStepController::class, 'store']);
Route::put('/update/{id}', [UpdateProcessStepController::class, 'update']);
Route::delete('/delete/{id}', [DeleteProcessStepController::class, 'destroy']);


Route::get('/all', [GetProcessStepListController::class, 'index']);
Route::get('/details/{id}', [GetProcessStepDetailsController::class, 'show']);
Route::get('/country/{countryId}', [GetProcessStepListByCountryIdController::class, 'index']);
