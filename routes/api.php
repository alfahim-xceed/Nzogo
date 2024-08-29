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

// media
Route::prefix("/media")->group(base_path("routes/storage.php"));

// country
Route::prefix("/country")->group(base_path("routes/country.php"));

// visa category
Route::prefix("/visa-category")->group(base_path("routes/visaCategory.php"));

//visa type
Route::prefix("/visa-type")->group(base_path("routes/visaType.php"));

//service
Route::prefix("/service")->group(base_path("routes/service.php"));

// visa details
Route::prefix("/visa-details")->group(base_path("routes/visaDetails.php"));

// visa details visa type
Route::prefix("/visa-details-visa-type")->group(base_path("routes/visaDetailsVisaType.php"));

// visa details service
Route::prefix("/visa-details-service")->group(base_path("routes/visaDetailsService.php"));

// document
Route::prefix("/document")->group(base_path("routes/document.php"));

// search
Route::prefix("/search")->group(base_path("routes/search.php"));

// visa applicaton
Route::prefix("/visa-application")->group(base_path("routes/visaApplication.php"));

Route::get('/test', function () {
    return response()->json(['message' => 'server is running!']);
});
