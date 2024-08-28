<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsTable extends Migration
{
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->foreignId('visa_details_id')
                  ->constrained('visa_details') // Foreign key constraint
                  ->onDelete('cascade'); // Cascade delete if visa_details is deleted
            $table->string('name');
            $table->text('description')->nullable(); // Nullable text field for description
            $table->timestamps(); // Created at and Updated at timestamps
        });
    }

    public function down()
    {
        Schema::dropIfExists('documents');
    }
}
