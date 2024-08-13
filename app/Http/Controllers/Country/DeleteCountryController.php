<?php

namespace App\Http\Controllers\Country;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;

class DeleteCountryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function destroy(Request $request,$id)
    {

        $user=$request->user();
        
        if ($user->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $country = Country::findOrFail($id);
        $country->delete();

        return response()->json(['message' => 'Country deleted successfully']);
    }
}
