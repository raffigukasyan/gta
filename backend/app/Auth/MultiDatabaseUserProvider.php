<?php
namespace App\Auth;

use App\Models\Account;
use Illuminate\Auth\EloquentUserProvider;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Database\Eloquent\Model;

class MultiDatabaseUserProvider extends EloquentUserProvider
{
    protected $connectionName;

    public function __construct(Hasher $hasher, string $model, string $connectionName)
    {
        parent::__construct($hasher, $model);
        $this->connectionName = $connectionName;
    }

    public function retrieveById($identifier)
    {
        return $this->createModel()->setConnection($this->connectionName)->find($identifier);
    }

    public function retrieveByToken($identifier, $token)
    {
        $model = $this->createModel();
        $model->setConnection($this->connectionName);

        return $model->newQuery()
            ->where($model->getKeyName(), $identifier)
            ->where('remember_token', $token)
            ->first();
    }

    public function updateRememberToken(Authenticatable $user, $token)
    {
        if ($user instanceof Model) {
            $user->setConnection($this->connectionName);
            $user->setRememberToken($token);
            $user->save();
        }
        
    }

    public function retrieveByCredentials(array $credentials)
    {
        $this->createModel()->setConnection($this->connectionName);

        return parent::retrieveByCredentials($credentials);
    }
}