<?php

use App\Http\Controllers\Appointment\CreateAppointmentController;
use App\Http\Controllers\Appointment\UpdateAppointmentController;
use App\Http\Controllers\Appointment\DeleteAppointmentController;
use App\Http\Controllers\Appointment\GetAppointmentListController;
use App\Http\Controllers\Appointment\GetAppointmentDetailsController;

Route::post('/create', [CreateAppointmentController::class, 'store']);
Route::put('/update/{id}', [UpdateAppointmentController::class, 'update']);
Route::delete('/delete/{id}', [DeleteAppointmentController::class, 'destroy']);
Route::get('/all', [GetAppointmentListController::class, 'index']);
Route::get('/details/{id}', [GetAppointmentDetailsController::class, 'show']);

