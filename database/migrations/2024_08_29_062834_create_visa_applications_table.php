<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisaApplicationsTable extends Migration
{
    public function up()
    {
        Schema::create('visa_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('citizen_of')->constrained('countries')->onDelete('cascade');
            $table->foreignId('visa_details_id')->constrained('visa_details')->onDelete('cascade');
            $table->date('travel_date');
            $table->json('visa_service_ids'); // Store as JSON for multiple foreign keys
            $table->foreignId('visa_type_id')->constrained('visa_details_visa_types')->onDelete('cascade');
            $table->string('status');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('visa_applications');
    }
}

