<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VisaDetailsVisaTypeRequest extends FormRequest
{
    public function authorize()
    {
        return true; // Adjust this according to your authorization logic
    }

    public function rules()
    {
        return [
            'visa_type_id' => 'required|exists:visa_types,id',
            'fee' => 'required|string',
            'currency' => 'required|string',
            'processing_time' => 'required|string',
        ];
    }
}
