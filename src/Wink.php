<?php

namespace Wink;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class Wink
{
    /**
     * Get the default JavaScript variables for Wink.
     *
     * @return array
     */
    public static function scriptVariables()
    {
        $user = null;
        if (Schema::hasTable('users')) {
            if(auth('wink')->check()) {
                $user = DB::table('users')->where('email', auth('wink')->user()->email)->first();
            }
        }

        return [
            'unsplash_key' => config('services.unsplash.key'),
            'path' => config('wink.path'),
            'preview_path' => config('wink.preview_path'),
            'author' => auth('wink')->check() ? auth('wink')->user()->only('name', 'avatar', 'id') : null,
            'default_editor' => config('wink.editor.default'),
            'base_url' => config('wink.BASE_URL'),
            'user' => $user ? [
                'id'    => $user->id,
                'firstname'  => $user->firstname,
                'lastname' => $user->lastname,
                'email' => $user->email,
                'role'  => $user->role,
            ] : null,
            'app_url' => config('wink.APP_URL')
        ];
    }
}
