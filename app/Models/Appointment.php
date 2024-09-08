<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'appointment_type',
        'appointment_schedule',
        'meeting_type',
        'desired_travel_destination_id',
        'visa_category_id',
        'expected_travel_date',
        'service_id',
        'user_id'
    ];

    // Define relationships
    public function country()
    {
        return $this->belongsTo(Country::class, 'desired_travel_destination_id');
    }

    public function visaCategory()
    {
        return $this->belongsTo(VisaCategory::class, 'visa_category_id');
    }

    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
