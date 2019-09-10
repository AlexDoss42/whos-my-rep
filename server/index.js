const express = require('express')

const app = express()

app.use(express.json())

app.listen(4242, () => console.log(`It's over Anakin! I have the 4242 port`))