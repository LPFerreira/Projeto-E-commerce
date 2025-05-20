import express from 'express'
import cors from 'cors'
import connectDatabase from './database/connectDatabase.js'
import routes from './routes.js'

const app = express()


app.use(express.json())
app.use(cors())
app.use(routes)


connectDatabase()
  .then(() => {
    app.listen(3000, () => console.log("conectado"))
  })
  .catch((error) => console.log(error))

