<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppealsController;
use App\Http\Controllers\FreeKassaController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\UnitPayController;
use App\Models\Stats;

Route::middleware(['set.sanctum.connection', 'custom.sanctum'])->group(function() {
     Route::get('/user', [AccountController::class, 'getWithRelations']);
     Route::post('/changeEmail', [AccountController::class, 'changeEmail']);
     Route::post('/changePassword', [AccountController::class, 'changePassword']);
     /* appeals */
     Route::post('/createAppeal', [AppealsController::class, 'store']);
     Route::get('/getAppeals', [AppealsController::class, 'getUserAppeal']);
     Route::get('/getAppeal/{id}', [AppealsController::class, 'show']);
     Route::post('/appeal/{id}/addFiles', [AppealsController::class, 'addFile']);
     Route::post('/appeal/{id}/message', [MessageController::class, 'store']);

     /* donate */
     Route::post('/freekassa/pay', [FreeKassaController::class, 'createPayment']);
     Route::post('/freekassa/webhook', [FreeKassaController::class, 'webhook']);

     Route::post('/unitpay/pay', [UnitPayController::class, 'createPayment']);
     Route::post('/unitpay/webhook', [UnitPayController::class, 'webhook']);
});
Route::get('/account/confirm-password-reset', [AccountController::class, 'resetPassword']);
Route::get('/account/confirm-email-change', [AccountController::class, 'confirmEmailChange']);
Route::post('/adminAuth', [AdminController::class, 'login']);

Route::middleware(['ipcheck'])->get('/checkIp', function() {
    return true;
});
Route::get('/appeal/{id}/messages', [MessageController::class, 'index']);

Route::middleware('custom.admin')->group(function() {
    Route::get('/adminUser', [AdminController::class, 'user']);
    Route::get('/appeals', [AppealsController::class, 'getAll']);
    Route::get('/appeals/{id}', [AppealsController::class, 'show']);
    Route::put('/appeals/{id}', [AppealsController::class, 'update']);
    Route::post('/adminAppeal/{id}/message', [MessageController::class, 'storeAdmin']);

});

Route::get('/forbes', function() {
    return Stats::where('isadmin', '=', '0')->where('sid', '!=', [460, 34010, 7868, 6531, 466, 53652, 45360, 51484])->orderBy('totalmoney', 'DESC')->limit(100)->get();
});
Route::post('/login', [AccountController::class, 'login']);
Route::resource('accounts', AccountController::class);
