<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vai_tro_quyens', function (Blueprint $table) {
            $table->integer('vai_tro_id');
            $table->integer('quyen_id');

            $table->primary(['vai_tro_id', 'quyen_id']);
            $table->foreign('vai_tro_id')->references('id')->on('vai_tros')->onDelete('cascade');
            $table->foreign('quyen_id')->references('id')->on('quyens')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vai_tro_quyens');
    }
};
