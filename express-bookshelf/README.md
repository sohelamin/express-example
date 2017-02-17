# Express.js example with Bookshelf ORM (MySQL)

## Usage

1. Make sure you've installed MySQL or any other RDBMS in your machine

2. Create a MySQL database with this schema
    ```mysql
    CREATE TABLE `posts` (
      `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
      `title` varchar(100) NOT NULL DEFAULT '',
      `content` text NOT NULL,
      PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ```

3. Configure the app in `config.js`

4. Run the following commands
    ``` bash
    npm install
    npm run start
    ```

## Author
[Sohel Amin](http://www.sohelamin.com)
