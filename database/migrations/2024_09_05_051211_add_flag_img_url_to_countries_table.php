<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFlagImgUrlToCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('countries', function (Blueprint $table) {
            // Add the new flag_img_url column
            $table->string('flag_img_url')->default('https://visathing.com/_next/image/?url=https%3A%2F%2Funispaces.sgp1.cdn.digitaloceanspaces.com%2Fnebula%2F1682576973849.png&w=1920&q=75')->after('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('countries', function (Blueprint $table) {
            // Remove the flag_img_url column
            $table->dropColumn('flag_img_url');
        });
    }
}
