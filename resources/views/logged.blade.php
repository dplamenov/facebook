@extends('layout.layout')
@section('title', 'Home page')
@section('content')
   <a href="{{url('logout')}}">Log out</a>
   <p>You`re logged.</p>
@endsection