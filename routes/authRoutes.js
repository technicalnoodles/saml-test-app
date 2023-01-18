const passport = require('passport')

module.exports = (app) => {
    app.get('/auth/cisco', passport.authenticate('cisco-spark', {scope: ['spark:all']}))

    app.get('/auth/cisco/callback', passport.authenticate('cisco-spark'))
};