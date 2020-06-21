<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class postLikes extends Model
{
    protected $primaryKey = 'post_id';
    protected $table = 'post_likes';
}
