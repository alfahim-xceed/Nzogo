<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nid extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nid_number',
        'address',
    ];

    /**
     * Get the user that owns the NID.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
