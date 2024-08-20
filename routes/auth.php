<?php



use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\GetUserInfo;
use App\Http\Controllers\Auth\GetUserListController;
use App\Http\Controllers\Auth\GetUserDetailsController;
use App\Http\Controllers\Auth\UpdateUserController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\UpdateMyProfileController;
use App\Http\Controllers\Auth\UpdateMyPasswordController;
use App\Http\Controllers\Auth\DeleteUserController;
use App\Http\Controllers\Auth\Test;

Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);

Route::delete('/test', [Test::class, 'clear_session']);


Route::middleware('auth:sanctum')->group(function () {
    Route::delete('/logout', [LogoutController::class, 'logout']);
    Route::get('/logged-user-info', [GetUserInfo::class,'show']);

    Route::put("/update/my-profile",[UpdateMyProfileController::class,'update']);
    Route::put("/update/my-password",[UpdateMyPasswordController::class,'update']);


    Route::put('/update/{id}', [UpdateUserController::class, 'update']);

    Route::get('/details/{id}', [GetUserDetailsController::class, 'show']);


    Route::get('/all', [GetUserListController::class, 'index']);

    Route::delete('/delete/{id}',[DeleteUserController::class,'deleteUser']);


});

