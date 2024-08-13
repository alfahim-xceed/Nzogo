<?php

namespace App\Http\Controllers\VisaType;

use App\Http\Controllers\Controller;
use App\Models\VisaType;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DeleteVisaTypeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function destroy(Request $request, $id)
    {

        $user=$request->user();
        
        if ($user->role->name !== 'admin') {
            return response()->json(['error' => 'Unauthorized'], 403);
        }


        $visaType = VisaType::find($id);

        if ($visaType) {
            $visaType->delete();
            return response()->json(['message' => 'Visa Type deleted successfully']);
        } else {
            return response()->json(['message' => 'Visa Type not found'], Response::HTTP_NOT_FOUND);
        }
    }
}
