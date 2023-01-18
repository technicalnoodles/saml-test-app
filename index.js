const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
require('./models/Event');

const port = 5000;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const app = express();
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 2 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

require('./routes/eventRoutes')(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
