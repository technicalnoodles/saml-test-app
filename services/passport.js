const passport = require('passport');
const CiscoStrategy = require('passport-cisco-spark').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new CiscoStrategy(
    {
      clientID: keys.ciscoClientID,
      clientSecret: keys.ciscoClientSecret,
      callbackURL: '/auth/cisco/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({
        ciscoId: profile.userName,
      }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            ciscoId: profile.userName,
            name: profile.displayname,
            departmentId: profile.department,
          })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
