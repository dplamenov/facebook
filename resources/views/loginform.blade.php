@extends('layout.layout')
@section('title', 'Login form')
@section('content')
    <form action="{{url('/')}}" method="post">
        @csrf
        @method('post')
    </form>
@endsection