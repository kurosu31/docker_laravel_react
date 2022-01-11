<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // postの一覧を表示する
    public function index()
    {
        // Post::all()でpostの一覧を取得してJOSNを返す
        $posts = Post::all();
        return response()->json($posts, 200);
    }
}
