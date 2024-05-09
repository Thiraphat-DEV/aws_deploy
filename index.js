var express = require('express')
var cors =require('cors')
var mysqls = require('mysql2')
var app = express()

require('dotenv').config()

const pull_data = mysqls.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE

}) 

app.use(cors())

app.get('/', (req, res, next) => {
	res.json({msg: "hello thiraphat"})
})

app.get('/attach', (req, res, next) => {
	pull_data.query("SELECT * FROM attractions", (error, row, field) => {
		res.json(row)
	})

})

app.listen(5000, () => {
	console.log('Hello world api')
})