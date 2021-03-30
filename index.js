const express = require('express')
const app = express()
const port = 1027

app.get('/', (req,res) => {
    res.send('Gym Scheduler')
})

app.listen(port,() => {
  console.log('Gym Schedule Running')
}
