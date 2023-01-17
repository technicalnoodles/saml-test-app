const express = require('express')
const mongoose = require('mongoose');
require('./models/Event')
const passport = require('passport')
const CiscoStrategy = require('passport-cisco-spark').Strategy;
const keys = require('./config/keys')

const port = 5000

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const app = express()
app.use(express.json())

passport.use(new CiscoStrategy({
  clientID: keys.ciscoClientID,
  clientSecret:keys.ciscoClientSecret,
  callbackURL: '/auth/cisco/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken)
  console.log(profile)
}
))

require('./routes/eventRoutes')(app)

app.get('/auth/cisco', passport.authenticate('cisco-spark', {scope: ['spark:all']}))

app.get('/auth/cisco/callback', passport.authenticate('cisco-spark'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})