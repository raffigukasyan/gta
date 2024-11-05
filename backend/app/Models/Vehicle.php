<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;


class Vehicle extends Model
{
    protected $table = 'vehicles';
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
        'model',
        'numberplate',
        'fuel',
        'dirt',
        'items',
        'gloveboxitems',
        'parklocation',
        'statistic',
        'customization',
        'garageid',
        'keychange',
        'type',
        'rent',
        'impound'
        
    ];
}
