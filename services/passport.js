const passport = require('passport');
const CiscoStrategy = require('passport-cisco-spark').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new CiscoStrategy(
    {
      clientID: keys.ciscoClientID,
      clientSecret: keys.ciscoClientSecret,
      callbackURL: '/auth/cisco/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({
        ciscoId: profile['_json']['userName'],
      }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            ciscoId: profile['_json']['userName'],
            name: profile['displayname'],
            departmentId: profile['_json']['department'],
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
