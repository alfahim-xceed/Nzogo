<?php

namespace App\Http\Controllers\Passport;

use App\Http\Controllers\Controller;
use App\Models\Passport;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;


class GetPassportListController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $passports = $user->role->name === 'admin' ? Passport::all() : $user->passports;

        return response()->json($passports);
    }
}
