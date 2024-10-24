<?php

namespace App\Http\Controllers;

use App\Traits\BelongsToTenant;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    use BelongsToTenant;

    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        //
    }
}
