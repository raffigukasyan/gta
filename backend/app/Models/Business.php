<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;


class Business extends Model
{
    protected $table = 'business';
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
        'products',
        'position',
        'buy_position',
        'subdata',
        'bankcard',
        'mafia',
        'truckpos',
        'materials',
        'statistic',
        'bankcardcash'
        
    ];
}
