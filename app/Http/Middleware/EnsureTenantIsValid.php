<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class EnsureTenantIsValid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Verifique se o usuário está autenticado
        $user = Auth::user();

        if (!$user || !$user->tenant_id) {
            abort(403, 'Unauthorized access');
        }

        // Se necessário, você pode adicionar lógica adicional aqui
        return $next($request);
    }
}
