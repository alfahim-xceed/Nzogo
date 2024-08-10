<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Storage\GetMediaPathController;
use App\Http\Controllers\Storage\AddNewMediaController;
use App\Http\Controllers\Storage\UpdateMediaController;
use App\Http\Controllers\Storage\DeleteMediaController;



Route::middleware('auth:sanctum')->group(function () {
    Route::get('/get-path/{tableId}', [GetMediaPathController::class, 'index']);

    Route::post('/create', [AddNewMediaController::class, 'store']);
    Route::put('/update/{id}', [UpdateMediaController::class, 'update']);

    Route::delete('/delete/{id}', [DeleteMediaController::class, 'destroy']);
});
