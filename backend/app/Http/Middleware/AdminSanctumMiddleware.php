<?php
namespace App\Http\Middleware;

use App\Models\Account;
use App\Models\Admin;
use App\Models\CustomPersonalAccessToken;
use Closure;
use DateTime;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;


class AdminSanctumMiddleware
{
    public function handle($request, Closure $next)
    {
        // Выполняем стандартную аутентификацию через Sanctum
        if ($token = $request->bearerToken()) {
            $tokenSplit = explode('|', $token)[1];
            
            $personalAccessToken = CustomPersonalAccessToken::on('mysql3')->where('token', '=', hash('sha256', $tokenSplit))->first();

            if ($personalAccessToken) {
                $userId = $personalAccessToken->tokenable_id;
                if(date_diff( now(), date_create($personalAccessToken->expires_at))->format('%i') == 0) {
                    return;
                }
                
                

                // Явно указываем соединение для модели пользователя
                $user = Admin::find($userId);

                if ($user) {
                    // Авторизуем пользователя
                    Auth::login($user);
                } else {

                }
            } else {

            }
        } else {
            
        }

        return $next($request);
    }
}
