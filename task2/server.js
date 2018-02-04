import dotenv from 'dotenv'
dotenv.config()

import app from './src/app'

const port = process.env.PORT || 3000
const server = app.listen(port, function() {
  console.log(`info: API server listening on 127.0.0.1:${port}`)
})