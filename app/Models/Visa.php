<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visa extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type_id',
        'fee',
        'currency',
        'processing_time',
        'category_id',
        'country_id',
        'user_id',
    ];

    /**
     * Get the visa type associated with the visa.
     */
    public function type()
    {
        return $this->belongsTo(VisaType::class, 'type_id');
    }

    /**
     * Get the visa category associated with the visa.
     */
    public function category()
    {
        return $this->belongsTo(VisaCategory::class, 'category_id');
    }

    /**
     * Get the country associated with the visa.
     */
    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    /**
     * Get the user who created the visa.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
