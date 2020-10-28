const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');

require('./passport-setup');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2'],
  }),
);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'system cashier service up and running',
    // environment: process.env.NODE_ENV,
    timestamp: new Date(),
  });
});
app.get('/login', (req, res) => {
  res.send(`welcome mr ${req.user}`);
});

app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function (req, res) {
  // Successful authentication, redirect home.
  res.redirect('/login');
});

app.listen(PORT, () => console.log(`app listen on port ${PORT}`));
