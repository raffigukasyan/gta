<?php
namespace App\Http\Middleware;

use App\Models\CustomPersonalAccessToken;
use Closure;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Log;
class SetSanctumTokenConnection
{
    public function handle($request, Closure $next)
    {
        // Получаем название соединения из запроса (или заголовка)
        $connectionName = $request->header('xDatabase') === 1 ? 'mysql' : 'mysql2'; // Значение по умолчанию
        // Устанавливаем соединение для модели токенов
        //app(CustomPersonalAccessToken::class)->setConnectionName($connectionName);

        return $next($request);
    }
}
