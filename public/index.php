<?php
spl_autoload_register(function ($class) {
    include '../' . $class . '.php';
});
$application = new system\Application();
$application->run();