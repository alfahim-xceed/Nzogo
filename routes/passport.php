<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Passport\GetPassportListController;
use App\Http\Controllers\Passport\GetPassportDetailsController;
use App\Http\Controllers\Passport\AddNewPassportController;
use App\Http\Controllers\Passport\UpdatePassportController;
use App\Http\Controllers\Passport\DeletePassportController;
use App\Http\Controllers\Passport\ManagePassportController;


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/all', [GetPassportListController::class, 'index']);
    Route::get('/details/{user_id}', [GetPassportDetailsController::class, 'show']);
    Route::post('/create', [AddNewPassportController::class, 'store']);
    Route::put('/update/{id}', [UpdatePassportController::class, 'update']);
    Route::post('/manage-passport',[ManagePassportController::class,'manage']);
    Route::delete('/delete/{id}', [DeletePassportController::class, 'destroy']);
});
