<?php

namespace App\Http\Controllers\Appointment;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CreateAppointmentController extends Controller
{
    public function store(Request $request)
    {
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
        }

        $validated = $request->validate([
            'appointment_type' => 'required|string|max:255',
            'appointment_schedule' => 'required|date',
            'meeting_type' => 'required|string|max:255',
            'desired_travel_destination_id' => 'required|exists:countries,id',
            'visa_category_id' => 'required|exists:visa_categories,id',
            'expected_travel_date' => 'required|date',
            'service_id' => 'required|exists:services,id',
        ]);
        $validated['user_id']=$user->id;

        $appointment = Appointment::create($validated);

        return response()->json($appointment, Response::HTTP_CREATED);
    }
}
