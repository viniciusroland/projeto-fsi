const express = require('express')
const cors = require('cors')
const app = express()
const router = require("./routes")

app.use(express.json())
app.use(cors())
app.use(router)

const port = 4000
app.listen(port, () => console.log(`rodando em: localhost:${port}`))
