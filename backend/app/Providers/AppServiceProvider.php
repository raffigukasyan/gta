<?php

namespace App\Providers;

use App\Providers\SHA256Provider;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\ServiceProvider;
use App\Auth\MultiDatabaseUserProvider;
use App\Http\Middleware\AdminSanctumMiddleware;
use App\Http\Middleware\CheckIP;
use App\Models\Account;
use Illuminate\Support\Facades\Auth;
use App\Http\Middleware\SetSanctumTokenConnection;
use App\Http\Middleware\CustomSanctumMiddleware;
use App\Http\Middleware\RedirectIfNotAdmin;
use App\Models\CustomPersonalAccessToken;
use Laravel\Sanctum\Sanctum;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //Sanctum::usePersonalAccessTokenModel(CustomPersonalAccessToken::class);
        Hash::extend('sha256', function($app)
        {
            return new SHA256Provider();
        });
        Auth::provider('multi-db', function ($app, array $config) {
            $hasher = app('hash');

            return new MultiDatabaseUserProvider($hasher, Account::class, $config['connection']);

        });
        $this->app['router']->aliasMiddleware('set.sanctum.connection', SetSanctumTokenConnection::class);
        $this->app['router']->aliasMiddleware('custom.sanctum', CustomSanctumMiddleware::class);
        $this->app['router']->aliasMiddleware('custom.admin', AdminSanctumMiddleware::class);
        $this->app['router']->aliasMiddleware('admin', RedirectIfNotAdmin::class);
        $this->app['router']->aliasMiddleware('ipcheck', CheckIP::class);
    }
}
