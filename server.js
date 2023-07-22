const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to use Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set the views directory to the 'views' folder
app.set('views', path.join(__dirname, 'views'));

// Set up session middleware
app.use(
  session({
    secret: 'your_secret_key', 
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const homeRoutes = require('./controllers/home-routes');
app.use('/', homeRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
