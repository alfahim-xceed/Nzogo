<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisaDetailsVisaTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visa_details_visa_types', function (Blueprint $table) {
            $table->id();
            $table->foreignId('visa_details_id')
                ->constrained('visa_details')
                ->onDelete('cascade');
            $table->foreignId('visa_type_id')
                ->constrained('visa_types')
                ->onDelete('cascade');
            $table->string('fee');
            $table->string('currency');
            $table->string('processing_time');
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
        Schema::dropIfExists('visa_details_visa_types');
    }
}
