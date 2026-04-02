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
        Schema::create('bai_hocs', function (Blueprint $table) {
            $table->id();
            $table->integer('danh_muc_id');
            $table->integer('nguoi_tao_id');
            $table->string('tieu_de', 200);
            $table->text('mo_ta')->nullable();
            $table->string('cap_do', 20);
            $table->integer('thu_tu')->nullable();
            $table->string('trang_thai', 20);

            $table->foreign('danh_muc_id')->references('id')->on('danh_muc_bai_hocs');
            $table->foreign('nguoi_tao_id')->references('id')->on('nguoi_dungs');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bai_hocs');
    }
};
