'use strict';

const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000

const app = express()
app.set('port', port)

app.use(express.static(path.join(__dirname, "../app/dist")))
app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
