<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $primaryKey = 'id';
    protected $table = 'post';


    public function likes()
    {
       return $this->hasMany(postLikes::class);
    }

}
