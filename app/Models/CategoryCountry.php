<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryCountry extends Model
{
    use HasFactory;

    protected $table = 'category_country';

    // If you want to protect against mass assignment vulnerabilities
    protected $fillable = ['category_id', 'country_id', 'user_id'];

    /**
     * Get the category associated with the CategoryCountry
     */
    public function category()
    {
        return $this->belongsTo(VisaCategory::class, 'category_id');
    }

    /**
     * Get the country associated with the CategoryCountry
     */
    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    /**
     * Get the user associated with the CategoryCountry
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
