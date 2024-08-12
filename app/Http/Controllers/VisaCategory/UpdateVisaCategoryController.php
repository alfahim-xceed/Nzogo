<?php

namespace App\Http\Controllers\VisaCategory;

use App\Http\Controllers\Controller;
use App\Models\VisaCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UpdateVisaCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('admin');
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $visaCategory = VisaCategory::find($id);
        if ($visaCategory) {
            $visaCategory->update($validated);
            return response()->json($visaCategory);
        }
        return response()->json(['message' => 'Visa category not found'], 404);
    }
}
