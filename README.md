## Nzogo

### How to build and run
1. Clone this Repo.

2. Create an new .env file and copy the .env.example there.

3. Run command
```cmd
composer install
php artisan key:generate
```

4. Goto resources folder and run
```cmd
cd resources
npm install
npm run watch
```

5. Start your local Mysql Server
```cmd
php artisan migrate
```

6. To start server Run command
```cmd
php artisan serve
```
