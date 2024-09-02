<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCountryServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('country_services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id')->constrained('services')->onDelete('cascade'); // Foreign key to services table
            $table->string('fee');
            $table->string('currency');
            $table->foreignId('category_id')->constrained('visa_categories')->onDelete('cascade'); // Foreign key to visa_categories table
            $table->foreignId('country_id')->constrained('countries')->onDelete('cascade'); // Foreign key to countries table
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Foreign key to users table
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
        Schema::dropIfExists('country_services');
    }
}

