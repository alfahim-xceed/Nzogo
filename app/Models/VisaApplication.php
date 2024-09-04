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
        'visa_id',
        'visa_type_id',
        'visa_service_ids',
        'travel_date',
        'status'
    ];


    protected $casts = [
        'visa_service_ids' => 'array',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class, 'citizen_of');
    }

    public function visa()
    {
        return $this->belongsTo(Visa::class);
    }

    public function visaType()
    {
        return $this->belongsTo(VisaType::class, 'visa_type_id');
    }

    public function services()
    {
        return $this->belongsToMany(CountryService::class, 'visa_application_services', 'visa_application_id', 'service_id');
    }
}
