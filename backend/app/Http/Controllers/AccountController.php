<?php

namespace App\Http\Controllers;

use App\Auth\MultiDatabaseUserProvider;
use Illuminate\Http\Request;
use App\Models\Account;
use App\Models\Character;
use App\Models\Money;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Consts\VehiclesConst;
use App\Models\Business;
use App\Models\House;
use App\Models\Vehicle;
use App\Providers\SHA256Provider;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;



class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    private function configureDatabase(Request $request)
    {
        $server = $request->input('server') ?? $request->header('xDatabase');
        
        $database = $server === 1 ? config('custom.first_db') : config("custom.second_db");

        config(['database.connections.mysql.database' => $database]);
        return $server;
    }

    public function index()
    {
        Account::all();
    }

    public function create_token(Request $request) 
    {
        $token = $request->user()->createToken($request->token_name);
    }

    public function login(Request $request)
    {
        try {
            $validateUser = Validator::make($request->all(), 
            [
                'login' => 'required',
                'password' => 'required'
            ]);
            
            $this->configureDatabase($request);
            if($validateUser->fails()) {
                return response()->json([
                    'status' => 'false',
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ]);
            }
            $pass = hash('sha256', $request->input('password'));

            if(!Auth::attempt(
                ['login' => $request->input('login'), 
                'password' => $request->input('password')]
            ) && 
            !Auth::attempt(
                ['login' => $request->input('login'), 
                'password' => $pass]
                )
            ) {
                return response()->json([
                    'status' => false,
                    'message' => 'password.invalid',
                ], 401);
            }

            $user = Account::where('login', $request->login)->first();
            
            return response()->json([
                'status' => true,
                'message' => 'User Logged In Successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    private function getMoney($character) {
        if(isset($character)) {
            $fullName = $character['firstname'] . '_' . $character['lastname'];
            $money = Money::where('holder', '=', $fullName)->first();
            if($money->balance) {
                $character->moneyBank = $money;
            }
        }
    }

    private function getHouse($character) {
        if(isset($character)) {
            $house = House::where('owner', '=', $character->idkey)->get();
            if(isset($house)) {
                $character->houses = $house;
            }
        }
    }

    private function getVehicles($character) {
        if(isset($character)) {
            $vehicle = Vehicle::where('owner', '=', $character->idkey)->get();
            $allVehicle = VehiclesConst::allVehicles();
        
            if(isset($vehicle)) {
                foreach($vehicle as $item) {
                    $item->name = $allVehicle[$item->model];
                    
                }
                $character->vehicles = $vehicle;
            }
        }
    }

    private function getBusiness($character) {
        if(isset($character)) {
            $business = Business::where('owner', '=', $character->idkey)->get();
        
            if(isset($business)) {
                $character->business = $business;
            }
        }
    }

    public function getWithRelations(Request $request)
    {
        $this->configureDatabase($request);
        
        $user = $request->user();
        
        // relations
        $character1 = Character::where( 'idkey', '=', $user->character1)->first();
        $character2 = Character::where( 'idkey', '=', $user->character2)->first();
        $character3 = Character::where( 'idkey', '=', $user->character3)->first();

        $this->getMoney($character1);
        $this->getMoney($character2);
        $this->getMoney($character3);

        $this->getVehicles($character1);
        $this->getVehicles($character2);
        $this->getVehicles($character3);

        $this->getHouse($character1);
        $this->getHouse($character2);
        $this->getHouse($character3);

        $this->getBusiness($character1);
        $this->getBusiness($character2);
        $this->getBusiness($character3);

        $user->character1 = $character1;
        $user->character2 = $character2;
        $user->character3 = $character3;
        
        return $user;
    }

    public function changeEmail(Request $request) {
        $server = $request->header('xDatabase');
        $connection = $server == 1 ? 'mysql' : 'mysql2';

        $validate = Validator::make($request->all(), [
            'email' => 'email|required'
        ]);

        if($validate->fails()) {
            return response()->json([
                'status' => 'false',
                'message' => 'validation error',
                'errors' => $validate->errors()
            ]);
        }

        $user = $request->user();
        $token = Str::random(60);
        $hashedToken = Hash::make($token);

        DB::connection($connection)->table('email_reset_tokens')->updateOrInsert(
            ['email' => $user->email],
            ['token' => $hashedToken, 'new_email' => $request->input('email')]
        );

        $frontendUrl = config('app.frontend_url');
        
        Mail::send('emails.email_change', ['token' => $hashedToken, 'frontendUrl' => $frontendUrl, 'new_email' => $request->email, 'user' => $user], function ($message) use ($request) {
            $message->to($request->email);
            $message->subject('Подтверждение смены email');
        });
        
        return response()->json(['message' => 'Письмо для подтверждения смены email отправлено.'], 200);
    }

    public function confirmEmailChange(Request $request)
    {
        $server = $request->header('xDatabase');
        $connection = $server == 1 ? 'mysql' : 'mysql2';

        $token = $request->query('token');
        $newEmail = $request->query('new_email');

        // Проверяем токен
        $emailChange = DB::connection($connection)->table('email_reset_tokens')->where('new_email', $newEmail)->first();

        if (!$emailChange || $emailChange->token !== $token) {
            return response()->json(['message' => 'Недействительный токен'], 400);
        }

        // Обновляем email пользователя
        $user = Account::on($connection)->where('email', '=', $emailChange->email)->first();
        if (!$user) {
            return response()->json(['message' => 'Пользователь не найден'], 404);
        }

        $user->email = $newEmail;
        $user->timestamps = false;
        $user->save();

        // Удаляем запись о смене email
        DB::connection($connection)->table('email_reset_tokens')->where('new_email', $newEmail)->delete();

        return response()->json(['message' => 'Email успешно изменён'], 200);
    }

    public function changePassword(Request $request) {
        $server = $request->header('xDatabase');
        $connection = $server == 1 ? 'mysql' : 'mysql2';

        $shaProvider = new SHA256Provider();

        $validate = Validator::make($request->all(), [
            'new_password' => 'required',
            'old_password' => 'required'
        ]);
        
        if($validate->fails()) {
            return response()->json([
                'status' => 'false',
                'message' => 'validation error',
                'errors' => $validate->errors()
            ]);
        }
        $user = $request->user();
        
         if(!Hash::check( $request->input('old_password'), $user->password)) {
            return response()->json([
                'status' => 'false',
                'message' => 'Введен не верно пароль',
            ]);
        }
        $token = Str::random(60);
        $frontendUrl = config('app.frontend_url'); // Добавим эту переменную в конфигурацию

        DB::connection($connection)->table('password_reset_tokens')->updateOrInsert(
            ['email' => $user->email],
            ['token' => Hash::make($token), 'password' => $request->get('new_password')]
        );
        Mail::send('emails.password_reset', ['token' => $token, 'frontendUrl' => $frontendUrl, 'user' => $user], function ($message) use ($user) {
            $message->to($user->email);
            $message->subject('Подтверждение смены пароля');
        });
        
        
        /*$account = Account::find($user->idkey);
        $account->timestamps = false;
        
        $account->password = $shaProvider->make($request->input('new_password'));
        $account->save();
        
        return response()->json([
            'status' => true,
            'message' => 'Успешно!'
        ]); */
        return response()->json([
            'status' => true,
            'message' => 'Успешно!'
        ]);
    }

    public function resetPassword(Request $request)
    {
        $server = $request->header('xDatabase');

        $token = $request->query('token');
        $email = $request->query('email');

        $connection = $server == 1 ? 'mysql' : 'mysql2';
        $reset = DB::connection($connection)->table('password_reset_tokens')->where('email', $email)->first();

        $user = Account::on($connection)->where('email', $request->email)->first();
        if (!$reset || !Hash::check($token, $reset->token)) {
            return response()->json(['message' => 'Недействительный токен'], 400);
        }
        
        $user->password = $reset->password;
        $user->timestamps = false;
        $user->save();

        DB::connection($connection)->table('password_reset_tokens')->where('email', $email)->delete();

        return response()->json(['message' => 'Пароль успешно изменен'], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
