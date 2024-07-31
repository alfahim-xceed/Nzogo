<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// auth
Route::prefix('/auth')->group(base_path('routes/auth.php'));


// role
Route::prefix('/role')->group(base_path('routes/role.php'));

// nid
Route::prefix('/nid')->group(base_path('routes/nid.php'));

// passport
Route::prefix('/passport')->group(base_path('routes/passport.php'));

Route::get('/test', function () {
    return response()->json(['message' => 'server is running!']);
});
