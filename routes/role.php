<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Role\CreateRoleController;
use App\Http\Controllers\Role\UpdateRoleController;
use App\Http\Controllers\Role\DeleteRoleController;
use App\Http\Controllers\Role\GetRolesController;
use App\Http\Controllers\Role\GetRoleController;

Route::post('/create', [CreateRoleController::class, 'store']);
Route::put('/update/{id}', [UpdateRoleController::class, 'update']);
Route::delete('/delete/{id}', [DeleteRoleController::class, 'destroy']);
Route::get('/all', [GetRolesController::class, 'index']);
Route::get('/details/{id}', [GetRoleController::class, 'show']);
