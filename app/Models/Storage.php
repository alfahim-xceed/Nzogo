<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Storage extends Model
{
    protected $fillable = ['location', 'storable_id', 'storable_type'];

    public function storable()
    {
        return $this->morphTo();
    }
}
