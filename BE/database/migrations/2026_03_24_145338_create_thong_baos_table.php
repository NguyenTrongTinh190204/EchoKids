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
        Schema::create('thong_baos', function (Blueprint $table) {
            $table->id();
            $table->integer('nguoi_nhan_id');
            $table->string('tieu_de', 200);
            $table->text('noi_dung');
            $table->string('loai', 50);
            $table->string('duong_dan', 255)->nullable();
            $table->integer('da_doc');

            $table->foreign('nguoi_nhan_id')->references('id')->on('nguoi_dungs');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('thong_baos');
    }
};
