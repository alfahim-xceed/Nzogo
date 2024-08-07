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


Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/logout', [LogoutController::class, 'logout']);

Route::middleware('auth:sanctum')->get('/logged-user-info', [GetUserInfo::class,'show']);



Route::middleware('auth:sanctum')->group(function () {

    Route::put("/update/my-profile",[UpdateMyProfileController::class,'update']);
    Route::put("/update/my-password",[UpdateMyPasswordController::class,'update']);


    Route::put('/update/{id}', [UpdateUserController::class, 'update']);


    Route::middleware('admin')->group(function () {
        Route::get('/all', [GetUserListController::class, 'index']);
        Route::get('/details/{id}', [GetUserDetailsController::class, 'show']);
    });
    
});

