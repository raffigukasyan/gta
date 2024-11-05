<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class FreeKassaController extends Controller
{
    public function createPayment(Request $request)
    {
        $order_id = $request->order_id;
        $sum = $request->sum;
        $currency = 'RUB';
        $desc = 'Оплата заказа #' . $order_id;
        $i = $request->i;
        $signature = $this->generateSignature($sum, $order_id, $currency, $i);

        // Формирование URL для перенаправления на оплату
        $url = "https://pay.freekassa.com/?" . http_build_query([
            'm' => config('donate.merchant_id'),
            'oa' => $sum,
            'o' => $order_id,
            'currency' => $currency,
            's' => $signature,
            'us_desc' => $desc,
            'i' => $i
        ]);

        return response()->json(['url' => $url]);
    }

    private function generateSignature($amount, $order_id, $currency)
    {
        return md5(config('donate.merchant_id') . ':' . $amount . ':' . config('donate.secret1') . ':' . $currency . ':' . $order_id);
    }

    // Обработка уведомлений от FreeKassa
    public function webhook(Request $request)
    {
        $order_id = $request->get('MERCHANT_ORDER_ID');
        $amount = $request->get('AMOUNT');
        $signature = $request->get('SIGN');
        $currency = "RUB";

        $generated_signature = $this->generateSignature($amount, $order_id, $currency);

        if ($signature !== $generated_signature) {
            return response('invalid signature', 400);
        }

        // Платеж подтвержден
        // Обновляем статус заказа

        return response('OK', 200);
    }
}
