<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@section('title')@show</title>
    <script src="https://js.pusher.com/5.1/pusher.min.js"></script>
    <script>
        Pusher.logToConsole = true;

        var pusher = new Pusher('d07eb779c146628e0d55', {
            cluster: 'eu',
            forceTLS: true
        });

        var channel = pusher.subscribe('my-channel');
        channel.bind('my-event', function (data) {
            console.log(data);
        });
    </script>
    <link rel="stylesheet" type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="{{URL::asset('css/style.css')}}">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script>
        Object.values = Object.values || function (obj) {
            return Object.keys(obj).map(e => obj[e]);
        }
        Array.prototype.flat = Array.prototype.flat || function () {
            return this.reduce((acc, val) => acc.concat(val), []);
        }
    </script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="{{asset('js/app.js')}}" async defer></script>

</head>

<body>
<div class="container">
    <div id="header">
        <h1 class="title">My social media</h1>
    </div>
    <div id="content">
        {{--        <div class="row">--}}
        {{--            <div class="col-2 left-section">--}}
        {{--                1 of 3--}}
        {{--            </div>--}}
        {{--            <div class="col-8 main-section">--}}
        {{--                @section('content')--}}
        {{--                @show--}}
        {{--            </div>--}}
        {{--            <div class="col-2 right-section">--}}
        {{--                3 of 3--}}
        {{--            </div>--}}
        {{--        </div>--}}
    </div>
</div>
</body>
</html>
