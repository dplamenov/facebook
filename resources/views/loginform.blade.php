@extends('layout.layout')
@section('title', 'Login form')
@section('content')
    <form action="{{url('/login')}}" method="post">
        @csrf
        @method('post')
        <label>
            Email
            <input type="text" name="email">
        </label>
        <br>
        <label>
            Password
            <input type="password" name="password">
        </label>
        <input type="submit"/>
    </form>
@endsection