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
        Schema::create('phien_luyen_taps', function (Blueprint $table) {
            $table->id();
            $table->integer('nguoi_dung_id');
            $table->integer('bai_hoc_id');
            $table->timestamp('thoi_gian_bat_dau')->nullable();
            $table->timestamp('thoi_gian_ket_thuc')->nullable();
            $table->integer('tong_diem')->nullable();

            $table->foreign('nguoi_dung_id')->references('id')->on('nguoi_dungs');
            $table->foreign('bai_hoc_id')->references('id')->on('bai_hocs');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('phien_luyen_taps');
    }
};
