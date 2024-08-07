<?php

namespace App\Http\Controllers\Passport;

use App\Http\Controllers\Controller;
use App\Models\Passport;
use Illuminate\Support\Facades\Auth;

class GetPassportDetailsController extends Controller
{
   

    public function show($user_id)
    {
        
        
        $user = Auth::user();

      
        $passport = Passport::where('user_id', $user_id)->first();

       
        if ($user->role->name !== 'admin' && $passport && $passport->user_id !== $user->id) {
            return response()->json(['error' => 'Unauthorized'], 200);
        }

       
        if (!$passport) {
            return response()->json(['passport_url' => '',
                'passport_given_name' => '',
                'passport_surname' => '',
                'passport_number' => '',
                'passport_expiry_date' => '', 
                'date_of_birth' => '', 
            ], 200);
        }

        return response()->json($passport);
    }
}
