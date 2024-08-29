<?php

use App\Http\Controllers\Search\{
    ManageSearchController
};

Route::get('/{travelling_to_id}/{visa_category_id}', ManageSearchController::class);


