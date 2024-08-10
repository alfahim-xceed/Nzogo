<?php
// database/migrations/xxxx_xx_xx_create_storages_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStoragesTable extends Migration
{
    public function up()
    {
        Schema::create('storages', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('location'); // Location of the file
            $table->morphs('storable'); // Polymorphic relation columns
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('storages');
    }
}
