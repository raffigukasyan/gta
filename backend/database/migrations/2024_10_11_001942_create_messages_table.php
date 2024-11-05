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
        Schema::connection('mysql3')->create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('appeal_id');
            $table->integer('user_id')->nullable();
            $table->unsignedBigInteger('admin_id')->nullable();
            $table->text('content');
            $table->timestamps();

            $table->foreign('admin_id')->references('id')->on('users')->onDelete('cascade');;
            $table->foreign('appeal_id')->references('id')->on('appeals')->onDelete('cascade');;
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
