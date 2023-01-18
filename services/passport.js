const passport = require('passport')
const CiscoStrategy = require('passport-cisco-spark').Strategy;
const keys = require('../config/keys')

passport.use(new CiscoStrategy(
    {
        clientID: keys.ciscoClientID,
        clientSecret:keys.ciscoClientSecret,
        callbackURL: '/auth/cisco/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log(accessToken)
        console.log(profile)
        }
    )
)