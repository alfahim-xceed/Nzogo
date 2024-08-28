<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisaType extends Model
{
    use HasFactory;

    // Specify the table if it's not the plural form of the model name
    protected $table = 'visa_types';

    // Specify the attributes that are mass assignable
    protected $fillable = ['name'];


    public function visaDetailsVisaTypes()
    {
        return $this->hasMany(VisaDetailsVisaType::class, 'visa_type_id');
    }

}
