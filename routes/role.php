<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Role\CreateRoleController;
use App\Http\Controllers\Role\UpdateRoleController;
use App\Http\Controllers\Role\DeleteRoleController;
use App\Http\Controllers\Role\GetRoleListController;
use App\Http\Controllers\Role\GetRoleDetailsController;




Route::get('/all', [GetRoleListController::class, 'index']);
Route::get('/details/{id}', [GetRoleDetailsController::class, 'show']);

Route::middleware('auth')->middleware('admin')->group(function () {

    Route::post('/create', [CreateRoleController::class, 'store']);
    Route::put('/update/{id}', [UpdateRoleController::class, 'update']);
    Route::delete('/delete/{id}', [DeleteRoleController::class, 'destroy']);
});
