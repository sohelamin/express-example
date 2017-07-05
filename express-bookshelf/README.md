# Express.js example with Bookshelf ORM (MySQL)

## Usage

1. Make sure you've installed MySQL or any other RDBMS in your machine

2. Create a MySQL database with these schema
    ```mysql
    CREATE TABLE `posts` (
      `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
      `title` varchar(100) NOT NULL DEFAULT '',
      `content` text NOT NULL,
      PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE `users` (
      `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
      `email` varchar(100) NOT NULL DEFAULT '',
      `password` varchar(100) NOT NULL DEFAULT '',
      PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ```

3. Configure the app in `config` dir

4. Run the following commands
    ``` bash
    npm install
    npm run start
    ```

## Author
[Sohel Amin](http://www.sohelamin.com)
