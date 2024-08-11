<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisaCategoriesTable extends Migration
{
    public function up()
    {
        Schema::create('visa_categories', function (Blueprint $table) {
            $table->id(); // Primary key column named 'id'
            $table->string('name'); // 'name' column
            $table->timestamps(); // Optional: timestamps for created_at and updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('visa_categories');
    }
}
