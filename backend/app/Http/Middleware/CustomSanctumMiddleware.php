<?php
namespace App\Http\Middleware;

use App\Models\Account;
use App\Models\CustomPersonalAccessToken;
use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class CustomSanctumMiddleware
{
    public function handle($request, Closure $next)
    {
        // Выполняем стандартную аутентификацию через Sanctum
        if ($token = $request->bearerToken()) {
            $tokenSplit = explode('|', $token)[1];
            
            $connectionName = $request->header('xDatabase') == 1 ? 'mysql' : 'mysql2';
            
            $personalAccessToken = CustomPersonalAccessToken::on($connectionName)->where('token', '=', hash('sha256', $tokenSplit))->first();

            if ($personalAccessToken) {
                $userId = $personalAccessToken->tokenable_id;

                // Явно указываем соединение для модели пользователя
                $user = Account::on($connectionName)->find($userId);

                if ($user) {
                    // Авторизуем пользователя
                    Auth::login($user);
                } else {
                    Log::warning("User not found for token: $token");
                }
            } else {
                Log::warning(CustomPersonalAccessToken::all());


            }
        } else {
            Log::warning("Token not found in custom table: $token");
        }

        return $next($request);
    }
}
