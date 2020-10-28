const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  //   User.findById(id, function (err, user) {
  done(null, user);
  //   });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: '758347660619-3bp27u7rktqekguc6gj85jdj69skjv6s.apps.googleusercontent.com',
      clientSecret: 'S4YIbOSSHj2mSJ46lxXVjVnW',
      callbackURL: 'http://localhost:3000/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return done(err, user);
      //   });
      return done(null, profile);
    },
  ),
);
