const express = require('express')
const cors = require('cors')
const app = express()
const UserController = require('./controllers/UserController')

app.use(express.json())
app.use(cors())

app.get("/user", UserController.index)
app.get("/user/:id", UserController.show)
app.post("/user", UserController.create)
app.patch("/user/:id", UserController.update)
app.delete("/user/:id", UserController.delete)

const port = 3000
app.listen(port, () => console.log(`rodando em: localhost:${port}`))
