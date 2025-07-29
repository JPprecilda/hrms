<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    protected $dontReport = [];

    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];


    public function render($request, Throwable $exception)
    {
        if ($exception instanceof NotFoundHttpException && $request->header('X-Inertia')) {
            return Inertia::render('Errors/404')->toResponse($request)->setStatusCode(404);
        }

        return parent::render($request, $exception);
    }


    public function register(): void
    {
        //
    }
}
