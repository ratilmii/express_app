const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World!</h1>
    <h2>This is a test.</h2>
    <h3>And this is an edit.</h3>
  `)
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})