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
        Schema::create('quan_he_gv_hvs', function (Blueprint $table) {
            $table->id();
            $table->integer('giao_vien_id');
            $table->integer('hoc_vien_id');
            $table->timestamp('ngay_them')->useCurrent();

            $table->foreign('giao_vien_id')->references('id')->on('nguoi_dungs');
            $table->foreign('hoc_vien_id')->references('id')->on('nguoi_dungs');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('quan_he_gv_hvs');
    }
};
