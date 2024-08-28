<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisaDetailsServicesTable extends Migration
{
    public function up()
    {
        Schema::create('visa_details_services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('visa_details_id')
                  ->constrained('visa_details') // References VisaDetails model
                  ->onDelete('cascade');
            $table->foreignId('service_id')
                  ->constrained('services') // References Service model
                  ->onDelete('cascade');
            $table->string('fee');
            $table->string('currency');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('visa_details_services');
    }
}
