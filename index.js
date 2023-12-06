const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const { PORT, JWT_SECRET} = require('./config')

const user_routes = require('./routes/user_routes')

const app = express()
const port = PORT || 3030

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Node app for shipping service')
})
app.use('/user', user_routes)

app.listen(port, () => {
  console.log(`Shipping service app listening on port ${port}`)
})