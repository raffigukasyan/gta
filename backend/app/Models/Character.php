<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;


class Character extends Model
{
    protected $table = 'characters';
    protected $primaryKey = 'idkey';
    protected $connection = 'mysql';
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'adminlvl',
        'money',
        'firstname',
        'lastname',
        'fraction',
        'fractionlvl',
        'warns',
        'biz',
        'sim',
        'eat',
        'water',
        'unwarn',
        'unmute',
        'bank',
        'wanter',
        'lvl',
        'exp',
        'gender',
        'health',
        'armor',
        'licenses',
        'lastveh',
        'lasthour',
        'contacts',
        'createddate',
        'pos',
        'work',
        'idkey',
        'lastbonus',
        'isbonused',
        'fines',
        'workstats',
        'age',
        'cooldown',
        'houses',
        'mainhouse',
        'questsdata',
        'dailybonus',
        'messages',
        'calls',
        'familyid',
        'familyrank',
        'dailyquest',
        'levels',
        'lastduty',
        'chips',
        'totaltime',
        'totaltimevehiclecontest',
        'fractionminutes',
        'married',
        'totaltimeday',
        'totaltimeweek',
        'contract',
        'jailtime',
        'jailreason',
        'bangun',
        'lastseen',
        'arestdata',
        'ft_today',
        'ft_week',
        'ft_month',
        'ft_total',
        'truck_stats',
        'addictions',
        'skills',
        'gamepass',
        'counters',
        'achievements',
        'crownPoints',
        'gamepassItems',
        'dailyRewards'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
}
