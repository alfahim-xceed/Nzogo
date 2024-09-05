<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->string('appointment_type');
            $table->dateTime('appointment_schedule');
            $table->string('meeting_type');
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

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appointments');
    }
}
