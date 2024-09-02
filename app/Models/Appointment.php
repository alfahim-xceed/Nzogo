<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->datetime('appointment_schedule');
            $table->foreignId('desired_travel_destination_id')
                ->constrained('countries')
                ->onDelete('cascade');
            $table->foreignId('visa_category_id')
                ->constrained('visa_categories')
                ->onDelete('cascade');
            $table->date('expected_travel_date');
            $table->foreignId('service_id')
                ->constrained('services')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('appointments');
    }
}
