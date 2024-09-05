<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'flag_img_url', // Add this field
    ];


    public function categoryCountries()
    {
        return $this->hasMany(CategoryCountry::class, 'country_id');
    }



    public function countryServices()
    {
        return $this->hasMany(CountryService::class, 'country_id');
    }

    public function embassies()
    {
        return $this->hasMany(Embassy::class);
    }

    public function processSteps()
    {
        return $this->hasMany(ProcessStep::class);
    }


    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'desired_travel_destination_id');
    }


}
