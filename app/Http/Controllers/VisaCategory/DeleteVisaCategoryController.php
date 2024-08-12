<?php

namespace App\Http\Controllers\VisaCategory;

use App\Http\Controllers\Controller;
use App\Models\VisaCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DeleteVisaCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('admin');
    }

    public function destroy($id)
    {
        $visaCategory = VisaCategory::find($id);
        if ($visaCategory) {
            $visaCategory->delete();
            return response()->json(['message' => 'Visa category deleted']);
        }
        return response()->json(['message' => 'Visa category not found'], 404);
    }
}
