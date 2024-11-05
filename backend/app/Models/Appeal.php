<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;


class Appeal extends Model
{
    protected $table = 'appeals';
    protected $primaryKey = 'id';
    protected $connection = "mysql3";
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'userId',
        'text',
        'type',
        'server',
        'characterId',
        'date',
        'err',
        'adminName',
        'email',
        'playerLogin',
        'nickName',
        'characterName',
        'screens',
        'videos',
        'offenders',
        'phone',
        'dateTime',
        'files',
        'idkey',
        'status',
        'closedDate'
    ];
}
