<?php

use App\Http\Controllers\Document\{
    CreateDocumentController,
    UpdateDocumentController,
    DeleteDocumentController,
    GetDocumentController,
    GetDocumentListController
};

    // Create a new document
    Route::post('/create', CreateDocumentController::class);

    // Update an existing document by ID
    Route::put('/update/{id}', UpdateDocumentController::class);

    // Delete a document by ID
    Route::delete('/delete/{id}', DeleteDocumentController::class);

    // Get a document by ID
    Route::get('/details/{id}', GetDocumentController::class);

    // Get a list of all documents
    Route::get('/all/{visaDetailsId}', GetDocumentListController::class);

