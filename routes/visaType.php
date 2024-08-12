<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VisaType\GetVisaTypeListController;
use App\Http\Controllers\VisaType\GetVisaTypeDetailsController;
use App\Http\Controllers\VisaType\CreateVisaTypeController;
use App\Http\Controllers\VisaType\UpdateVisaTypeController;
use App\Http\Controllers\VisaType\DeleteVisaTypeController;

Route::get('/all', [GetVisaTypeListController::class, 'index']);
Route::get('/details/{id}', [GetVisaTypeDetailsController::class, 'show']);


Route::middleware('auth')->middleware('admin')->group(function () {
    Route::post('/create', [CreateVisaTypeController::class, 'store']);
    Route::put('/update/{id}', [UpdateVisaTypeController::class, 'update']);
    Route::delete('/delete/{id}', [DeleteVisaTypeController::class, 'destroy']);
});
