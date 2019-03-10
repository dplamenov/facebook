<?php

namespace system;
class Application
{
    public function view($view)
    {
        include_once '../' . 'views' . $view . '.php';
    }
}