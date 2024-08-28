<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisaDetailsVisaType extends Model
{
    use HasFactory;

    protected $fillable = [
        'visa_details_id',
        'visa_type_id',
        'fee',
        'currency',
        'processing_time'
    ];

    // Relationship with VisaDetails
    public function visaDetails()
    {
        return $this->belongsTo(VisaDetails::class, 'visa_details_id');
    }

    // Relationship with VisaType
    public function visaType()
    {
        return $this->belongsTo(VisaType::class, 'visa_type_id');
    }
}
