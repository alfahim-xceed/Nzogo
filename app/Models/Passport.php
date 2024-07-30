<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Passport extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'passport_url',
        'passport_given_name',
        'passport_surname',
        'passport_number',
        'passport_expiry_date',
        'date_of_birth',
    ];

    /**
     * Get the user that owns the Passport.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    
}
