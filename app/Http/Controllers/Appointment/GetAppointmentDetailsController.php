<?php

namespace App\Http\Controllers\Appointment;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Response;

class GetAppointmentDetailsController extends Controller
{
    public function show($id)
    {
        $appointment = Appointment::with(['country', 'visaCategory', 'service'])->findOrFail($id);

        return response()->json($appointment);
    }
}
