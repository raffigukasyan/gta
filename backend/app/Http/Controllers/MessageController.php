<?php
namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Appeal;
use App\Models\Message;
use App\Models\Complaint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    // Получить все сообщения для конкретного обращения
    public function index($id)
    {
        // Получаем все сообщения, связанные с этим обращением
        $messages = Message::where('appeal_id', $id)->with('admin')->get();

        return response()->json($messages);
    }

    // Отправить новое сообщение
    public function store(Request $request, $id)
    {
        $request->validate([
            'content' => 'required|string|max:2000',
        ]);

        // Создаем новое сообщение
        $message = Message::create([
            'appeal_id' => $id,
            'user_id' => $request->input('user_id'),
            'content' => $request->input('content'),
            'username' => $request->input('username')
        ]);

        return response()->json($message, 201);
    }

    public function storeAdmin(Request $request, $id)
    {
        $request->validate([
            'content' => 'required|string|max:2000',
        ]);
        // Создаем новое сообщение
        $message = Message::create([
            'appeal_id' => $id,
            'admin_id' => $request->input('admin_id'),
            'content' => $request->input('content'),
        ]);

        return response()->json($message, 201);
    }
}
