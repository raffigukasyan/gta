<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckIP
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Разрешенные IP-адреса
        $allowed_ips = config('ip.allowed');

        if (!in_array($request->ip(), $allowed_ips)) {
            // Возвращаем ошибку или перенаправляем, если IP не разрешен
            return response($request->ip(), 403);
        }

        return $next($request);
    }
}
