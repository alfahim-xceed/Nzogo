<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisaDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        'from_country_id',
        'to_country_id',
        'visa_category_id',
    ];

    public function fromCountry()
    {
        return $this->belongsTo(Country::class, 'from_country_id');
    }

    public function toCountry()
    {
        return $this->belongsTo(Country::class, 'to_country_id');
    }

    public function visaDetailsVisaTypes()
    {
        return $this->hasMany(VisaDetailsVisaType::class, 'visa_details_id');
    }


    public function visaCategory()
    {
        return $this->belongsTo(VisaCategory::class, 'visa_category_id');
    }
}
