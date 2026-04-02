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
        Schema::create('goi_y_luyen_taps', function (Blueprint $table) {
            $table->id();
            $table->integer('giao_vien_id');
            $table->integer('hoc_vien_id');
            $table->text('noi_dung');
            $table->integer('da_doc');
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
        Schema::dropIfExists('goi_y_luyen_taps');
    }
};
