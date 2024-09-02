<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryCountryRequiredDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('category_country_required_documents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('requirement_document_id');
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('country_id');
            $table->unsignedBigInteger('user_id');
            $table->foreign('requirement_document_id', 'ccrd_req_doc_fk')
                ->references('id')->on('required_documents')->onDelete('cascade');
            $table->foreign('category_id', 'ccrd_cat_fk')
                ->references('id')->on('visa_categories')->onDelete('cascade');
            $table->foreign('country_id', 'ccrd_country_fk')
                ->references('id')->on('countries')->onDelete('cascade');
            $table->foreign('user_id', 'ccrd_user_fk')
                ->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('category_country_required_documents');
    }
}
