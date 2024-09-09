<?php

namespace App\Http\Controllers\Appointment;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class GetAppointmentListController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        if ($user->role->name === 'admin') {
            // Admin users can see all appointments
            $appointments = Appointment::with(['country', 'visaCategory', 'countryService'])->get();
        } else {
            // Non-admin users can see only their own appointments
            $appointments = Appointment::with(['country', 'visaCategory', 'countryService'])
                ->where('user_id', $user->id)
                ->get();
        }

        return response()->json($appointments);
    }
}
