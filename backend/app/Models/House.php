<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;


class House extends Model
{
    protected $table = 'houses';
    protected $primaryKey = 'id';
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'owner',
        'price',
        'type',
        'locked',
        'position',
        'lifers',
        'garageid',
        'shelteritems',
        'safeitems',
        'bankcard',
        'towerid',
        'interiorId'
        
    ];
}
