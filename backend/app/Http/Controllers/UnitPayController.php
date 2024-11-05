<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class UnitPayController extends Controller
{
    public function createPayment(Request $request)
    {
        $account = $request->account;
        $sum = $request->sum;
        $currency = 'RUB';
        $desc = 'Пополнение игрового аккаунта';
        $sign = $this->generateSignature($account, $currency, $desc, $sum);
        $cashItems = $request->cashItems;
        $paymentType = $request->i;
//442470-c748d
        $paymentUrl = "https://unitpay.ru/pay/" . config('donate.unitpay_public_key') . "?" . http_build_query([
            'sum' => $sum,
            'account' => $account,
            'desc' => $desc,
            'currency' => $currency,
            'signature' => $sign,
            'customerEmail' => $request->email,
            'cashItems' => $cashItems,
            'paymentType' => $paymentType
        ]);
        return response()->json(['url' => $paymentUrl]);
    }

    private function generateSignature($account, $currency, $desc, $sum)
    {
        return hash('sha256', join('{up}', [
            $account, $currency, $desc, $sum, config('donate.unitpay_secret_key')
        ]));
    }

    // Обработка уведомлений от UnitPay
    public function webhook(Request $request)
    {
        $method = $request->get('method');
        $params = $request->get('params');

        if ($method === 'check') {
            // Обработка запроса проверки
            return response()->json(['result' => ['message' => 'Проверка пройдена']]);
        }

        if ($method === 'pay' && $this->validateSignature($params)) {
            // Платеж прошел успешно
            // Обновляем статус заказа
            $status = $params['account'];
            // Обработка вашего заказа

            return response()->json(['result' => ['message' => 'Платеж успешно обработан']]);
        }

        return response()->json(['error' => ['message' => 'Некорректный запрос']]);
    }

    private function validateSignature($params)
    {
        $signature = $params['signature'];
        $generated_signature = $this->generateSignature($params['account'], $params['currency'], $params['desc'], $params['sum']);

        return $signature === $generated_signature;
    }
}
