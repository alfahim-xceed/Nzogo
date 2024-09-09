<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CountryService extends Model
{
    use HasFactory;

    protected $table = 'country_services';

    // If you want to protect against mass assignment vulnerabilities
    protected $fillable = ['service_id', 'fee', 'currency', 'category_id', 'country_id', 'user_id'];

    /**
     * Get the service associated with the CountryService
     */
    public function service()
    {
        return $this->belongsTo(Service::class, 'service_id');
    }

    /**
     * Get the category associated with the CountryService
     */
    public function category()
    {
        return $this->belongsTo(VisaCategory::class, 'category_id');
    }

    /**
     * Get the country associated with the CountryService
     */
    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    /**
     * Get the user associated with the CountryService
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Define the inverse relationship if needed
    public function visaApplications()
    {
        return $this->belongsToMany(VisaApplication::class, 'visa_application_services', 'service_id', 'visa_application_id');
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}
