<?php

namespace App\Http\Controllers\Service;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;

class DeleteServiceController extends Controller
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


        $service = Service::find($id);

        if (!$service) {
            return response()->json(['message' => 'Service not found'], 404);
        }

        $service->delete();

        return response()->json(['message' => 'Service deleted successfully']);
    }
}
