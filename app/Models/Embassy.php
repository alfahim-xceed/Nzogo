<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Embassy extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'phone_number',
        'email',
        'website_url',
        'work_schedule',
        'country_id',
    ];

    // Define relationship with Country model
    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
