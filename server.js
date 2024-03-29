require('dotenv').config()

require('./config/database')

const app = require('./app-server')

const PORT = process.env.PORT || 8002

app.listen(PORT, () => {
	console.log(`App is listening on ${PORT}.`)
})