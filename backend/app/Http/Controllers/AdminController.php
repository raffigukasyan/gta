<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Providers\SHA256Provider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;


class AdminController extends Controller
{

    public function guard()
    {
        return Auth::guard('admin');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function login(Request $request) 
    {
       $user = Admin::where('login', $request->input('login'))->first();
       $shaProvider = new SHA256Provider();
       
       if(!$user) {
        return response()->json(['message' => 'Login incorrect'], 401);
       }
       if(!$shaProvider->check($request->input('password'), $user->password) && hash('sha256', $request->input('password') !== $user->password)) {
        return response()->json(['message' => 'Password incorrect'], 401);
        
       }
       
       $token = $user->createToken('admin-token', ['actAsAdmin'], now()->addMinutes(20))->plainTextToken;
       return response()->json(['token' => $token, 'user' => $user], 200);
    }

    public function user(Request $request)
    {
        return $request->user();
    }
    
}
