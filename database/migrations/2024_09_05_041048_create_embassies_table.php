<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmbassiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('embassies', function (Blueprint $table) {
            $table->id(); // Primary key: id
            $table->string('name');
            $table->string('address');
            $table->string('phone_number');
            $table->string('email');
            $table->string('website_url')->nullable(); // Allows null values for the website URL
            $table->string('work_schedule');
            $table->unsignedBigInteger('country_id'); // Foreign key: country_id
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade'); // Foreign key relation with countries table
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('embassies');
    }
}
