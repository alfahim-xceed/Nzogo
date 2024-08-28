<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisaDetailsService extends Model
{
    use HasFactory;

    protected $fillable = [
        'visa_details_id',
        'service_id',
        'fee',
        'currency',
    ];

    public function visaDetails()
    {
        return $this->belongsTo(VisaDetails::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
