<?php
namespace App\Models;

use Illuminate\Support\Facades\Log;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;

class CustomPersonalAccessToken extends SanctumPersonalAccessToken
{
    protected $table = 'personal_access_tokens';
    protected $connection;

    public function tokenable(): MorphTo
    {
        $relation = parent::tokenable();
        
        if($relation) {
            $relation->setConnection($this->connection);
        }

        return $relation;
    }

    // Динамически указываем соединение
    public function setConnectionName($connectionName)
    {
        Log::info($connectionName);
        $this->connection = $connectionName;
        
        return $this;
    }
}
