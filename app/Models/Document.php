<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $fillable = ['visa_details_id', 'name', 'description'];

    public function visaDetails()
    {
        return $this->belongsTo(VisaDetails::class, 'visa_details_id');
    }
}
