<?php

use App\Http\Controllers\RequiredDocument\CreateRequiredDocument;
use App\Http\Controllers\RequiredDocument\UpdateRequiredDocument;
use App\Http\Controllers\RequiredDocument\DeleteRequiredDocument;
use App\Http\Controllers\RequiredDocument\GetRequiredDocumentList;
use App\Http\Controllers\RequiredDocument\GetRequiredDocumentDetails;

Route::post('/create', CreateRequiredDocument::class); // Create
Route::put('/update/{id}', UpdateRequiredDocument::class); // Update
Route::delete('/delete/{id}', DeleteRequiredDocument::class); // Delete
Route::get('/all', GetRequiredDocumentList::class); // List
Route::get('/details/{id}', GetRequiredDocumentDetails::class); // Details

