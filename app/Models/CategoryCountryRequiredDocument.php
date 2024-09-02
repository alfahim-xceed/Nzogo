<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryCountryRequiredDocument extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'requirement_document_id',
        'category_id',
        'country_id',
        'user_id',
    ];

    /**
     * Get the required document associated with this category country required document.
     */
    public function requiredDocument()
    {
        return $this->belongsTo(RequiredDocument::class, 'requirement_document_id');
    }

    /**
     * Get the visa category associated with this category country required document.
     */
    public function category()
    {
        return $this->belongsTo(VisaCategory::class, 'category_id');
    }

    /**
     * Get the country associated with this category country required document.
     */
    public function country()
    {
        return $this->belongsTo(Country::class, 'country_id');
    }

    /**
     * Get the user associated with this category country required document.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
