<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; // Import the DB facade

class RolesTableSeeder extends Seeder
{
     /**
     * Seed the roles table.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'name' => 'admin',
        ]);
    }
}
