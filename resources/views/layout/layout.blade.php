<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@section('title')@show</title>
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/style.css')}}">
    <script src="{{asset('js/app.js')}}" async defer></script>
</head>

<body>
<div class="container">
    <div id="header">
        <h1 style="text-align: center">Logo</h1>
    </div>
    <div id="content">
        <div class="row">
            <div class="col-2 left-section">
                1 of 3
            </div>
            <div class="col-8 main-section">
                @section('content')
                @show
            </div>
            <div class="col-2 right-section">
                3 of 3
            </div>
        </div>
    </div>
</div>
</body>
</html>
