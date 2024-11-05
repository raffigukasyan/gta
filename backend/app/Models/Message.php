<?php
namespace App\Models;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Message extends Model
{
    use HasFactory;
    protected $guard = 'admin';
    protected $table = 'messages';
    protected $connection = 'mysql3';
    protected $fillable = ['content', 'admin_id', 'user_id', 'appeal_id', 'username'];

    public function appeal() 
    {
        return $this->belongsTo(Appeal::class);
    }
    public function admin() 
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }

}    