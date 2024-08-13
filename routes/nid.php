<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Nid\GetNidListController;
use App\Http\Controllers\Nid\GetNidDetailsController;
use App\Http\Controllers\Nid\ManageUserNidController;
use App\Http\Controllers\Nid\AddNewNidController;
use App\Http\Controllers\Nid\UpdateNidController;
use App\Http\Controllers\Nid\DeleteNidController;

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/all', [GetNidListController::class, 'index']);
    Route::get('/details/{user_id}', [GetNidDetailsController::class, 'show']);
    Route::post('/manage-nid', [ManageUserNidController::class, 'manage']);
    Route::post('/create', [AddNewNidController::class, 'store']);
    Route::put('/update/{id}', [UpdateNidController::class, 'update']);
    Route::delete('/delete/{id}', [DeleteNidController::class, 'destroy']);
});
