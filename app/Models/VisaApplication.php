<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisaApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'citizen_of',
        'visa_details_id',
        'travel_date',
        'visa_service_ids',
        'visa_type_id',
        'status',
    ];

    protected $casts = [
        'visa_service_ids' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function citizenOf()
    {
        return $this->belongsTo(Country::class, 'citizen_of');
    }

    public function visaDetails()
    {
        return $this->belongsTo(VisaDetails::class, 'visa_details_id');
    }

    public function visaType()
    {
        return $this->belongsTo(VisaDetailsVisaType::class, 'visa_type_id');
    }

    public function visaServices()
    {
        return $this->hasMany(VisaDetailsService::class, 'id', 'visa_service_ids');
    }
}
