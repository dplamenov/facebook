@extends('layout.layout')
@section('title', 'Login form')
@section('content')
    @if ($errors->any())
        @foreach($errors->all() as $error)
            <p>{{$error}}</p>
        @endforeach
    @endif
    <form action="{{url('/login')}}" method="post">
        @csrf
        @method('post')
        <label style="width: 100%">
            Email
            <input type="text" name="email" class="form-control" >
        </label>
        <br>
        <label style="width: 100%">
            Password
            <input type="password" name="password" class="form-control">
        </label>
        <button type="submit">Login</button>
    </form>
@endsection
