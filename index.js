const express = require('express')
const mongoose = require('mongoose');
require('./models/Event')

const port = 5000

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const app = express()
app.use(express.json())

require('./routes/eventRoutes')(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})