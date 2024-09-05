<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'password',
        'role_id',  // Add this line to reference the role_id
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the role associated with the user.
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * Get the NIDs for the user.
     */
    public function nids()
    {
        return $this->hasMany(Nid::class);
    }


    /**
     * Get the Passports for the user.
     */
    public function passports()
    {
        return $this->hasMany(Passport::class);
    }


    public function storages()
    {
        return $this->morphMany(Storage::class, 'storable');
    }

    public function categoryCountries()
    {
        return $this->hasMany(CategoryCountry::class, 'user_id');
    }

    public function countryServices()
    {
        return $this->hasMany(CountryService::class, 'user_id');
    }

    public function processSteps()
    {
        return $this->hasMany(ProcessStep::class);
    }


}
