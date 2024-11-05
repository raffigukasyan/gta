<p>Здравствуйте!</p>
<p>Чтобы подтвердить смену пароля, перейдите по следующей ссылке:</p>
<p>
    <a href="{{ $frontendUrl }}/reset-password?token={{ $token }}&email={{ urlencode($user->email) }}">
        Подтвердить смену пароля
    </a>
</p>