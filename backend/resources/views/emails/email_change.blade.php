<p>Здравствуйте!</p>
<p>Для подтверждения смены email, перейдите по следующей ссылке:</p>
<p>
    <a href="{{ $frontendUrl }}/confirm-email-change?token={{ $token }}&new_email={{ urlencode($new_email) }}">
        Подтвердить смену email
    </a>
</p>