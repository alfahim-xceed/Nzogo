<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisaDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visa_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('from_country_id')->constrained('countries');
            $table->foreignId('to_country_id')->constrained('countries');
            $table->foreignId('visa_category_id')->constrained('visa_categories');
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
        Schema::dropIfExists('visa_details');
    }
}
