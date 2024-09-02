<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisaCategory extends Model
{
    use HasFactory;

    // Specify the table name if it doesn't follow Laravel's convention
    // protected $table = 'visa_categories';

    // Specify the fillable fields
    protected $fillable = [
        'name',
    ];


    public function categoryCountries()
    {
        return $this->hasMany(CategoryCountry::class, 'category_id');
    }

    public function countryServices()
    {
        return $this->hasMany(CountryService::class, 'category_id');
    }

}
