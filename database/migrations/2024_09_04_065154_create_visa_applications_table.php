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
            $table->foreignId('visa_id')->constrained('visas')->onDelete('cascade');
            $table->foreignId('visa_type_id')->constrained('visa_types')->onDelete('cascade');
            $table->json('visa_service_ids');
            $table->dateTime('travel_date');
            $table->string('status');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('visa_applications');
    }
}
