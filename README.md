# Tech Blog

A CMS-style blog site where users can create, edit, and delete blog posts, as well as leave comments on the posts.

## Description

Tech Blog is a full-stack web application built using Node.js, Express.js, Handlebars.js, and Sequelize. It allows users to register and log in to create, view, edit, and delete their blog posts. Users can also leave comments on blog posts.

## Technologies Used

- Node.js
- Express.js
- Handlebars.js
- Sequelize (MySQL2)
- Express Session and Connect-Session-Sequelize for authentication
- bcrypt for password hashing
- dotenv for managing environment variables

## Features

- User registration and login functionality with hashed passwords for security.
- CRUD (Create, Read, Update, Delete) operations for blog posts and comments.
- Responsive and intuitive user interface.
- Session management to keep users logged in between visits.

## Installation

1. Clone the repository to your local machine:

   git clone https://github.com/Gr1ssom/Blogger2

2. Install the required dependencies:

   npm install

3. Set up your MySQL database and update the `.env` file with your database credentials:

   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PW=your_database_password

4. Run the application:

   npm start

## Usage

- Visit the homepage to see existing blog posts.
- Sign up or log in to create new blog posts or leave comments on existing posts.
- Click on a post to view its contents and comments.
- On the dashboard, you can see and manage your own blog posts.
- Log out to end your session.

## Contact

If you have any questions or suggestions, feel free to contact me: github.com/Gr1ssom

## License

MIT
