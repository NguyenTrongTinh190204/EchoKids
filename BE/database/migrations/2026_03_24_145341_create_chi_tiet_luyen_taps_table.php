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
        Schema::create('chi_tiet_luyen_taps', function (Blueprint $table) {
            $table->id();
            $table->integer('phien_id');
            $table->integer('tu_vung_id');
            $table->string('file_ghi_am_url', 255)->nullable();
            $table->text('van_ban_ai_nhan_dien')->nullable();
            $table->float('diem_tin_cay')->nullable();
            $table->integer('diem_chinh_xac')->nullable();
            $table->boolean('loi_am_dau')->nullable();
            $table->boolean('loi_van')->nullable();
            $table->boolean('loi_thanh_dieu')->nullable();
            $table->text('chi_tiet_loi')->nullable();
            $table->timestamp('ngay_tao')->useCurrent();

            $table->foreign('phien_id')->references('id')->on('phien_luyen_taps')->onDelete('cascade');
            $table->foreign('tu_vung_id')->references('id')->on('tu_vungs');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chi_tiet_luyen_taps');
    }
};
