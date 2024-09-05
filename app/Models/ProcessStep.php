<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProcessStep extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'country_id',
        'user_id',
    ];

    /**
     * Get the country that owns the process step.
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    /**
     * Get the user that owns the process step.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
