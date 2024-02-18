<?php

namespace Database\Seeders;
 use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\ProductoSeeder;
use Database\Seeders\CategoriaSeeder;

class DatabaseSeeder extends Seeder


{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([CategoriaSeeder::class]);
        $this->call([ProductoSeeder::class]);
    }
}
