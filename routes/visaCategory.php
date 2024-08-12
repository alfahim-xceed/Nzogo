<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VisaCategory\{
    GetVisaCategoryListController,
    GetVisaCategoryDetailsController,
    CreateVisaCategoryController,
    UpdateVisaCategoryController,
    DeleteVisaCategoryController
};

Route::get('/all', [GetVisaCategoryListController::class, 'index']);
Route::get('/details/{id}', [GetVisaCategoryDetailsController::class, 'show']);


Route::middleware('auth')->middleware('admin')->group(function () {
    Route::post('/create', [CreateVisaCategoryController::class, 'store']);
    Route::put('/update/{id}', [UpdateVisaCategoryController::class, 'update']);
    Route::delete('/delete/{id}', [DeleteVisaCategoryController::class, 'destroy']);
});
