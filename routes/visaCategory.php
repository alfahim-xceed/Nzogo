<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VisaCategory\{
    GetVisaCategoryListController,
    GetVisaCategoryDetailsController,
    CreateVisaCategoryController,
    UpdateVisaCategoryController,
    DeleteVisaCategoryController
};

Route::get('/visa-categories', [GetVisaCategoryListController::class, 'index']);
Route::get('/visa-categories/{id}', [GetVisaCategoryDetailsController::class, 'show']);

Route::middleware('auth')->group(function () {
    Route::post('/visa-categories', [CreateVisaCategoryController::class, 'store']);
    Route::put('/visa-categories/{id}', [UpdateVisaCategoryController::class, 'update']);
    Route::delete('/visa-categories/{id}', [DeleteVisaCategoryController::class, 'destroy']);
});
