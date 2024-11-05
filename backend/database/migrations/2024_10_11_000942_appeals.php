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
        Schema::connection('mysql3')->create('appeals', function (Blueprint $table) {
            $table->id();
            $table->integer('userId');
            $table->string('text')->nullable();
            $table->string('type');
            $table->string('server');
            $table->integer('characterId')->nullable();
            $table->integer('characterName')->nullable();
            $table->string('date')->nullable();
            $table->string('adminName')->nullable();
            $table->string('phone')->nullable();
            $table->string('dateTime')->nullable();
            $table->string('err')->nullable();
            $table->string('email')->nullable();
            $table->string('playerLogin')->nullable();
            $table->string('nickName')->nullable();
            $table->string('adminAnswer')->nullable();
            $table->string('status')->default('wait');
            $table->json('files')->nullable();
            $table->timestamps();
        });

        Schema::connection('mysql3')->create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->integer('access_level');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::connection('mysql3')->create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::connection('mysql3')->create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
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
