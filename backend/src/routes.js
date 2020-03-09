const express = require('express')
const router = express.Router()
const UserController = require('./controllers/UserController')

router.get("/users", UserController.index)
router.get("/users/:id", UserController.show)
router.post("/users", UserController.create)
router.patch("/users/:id", UserController.update)
router.delete("/users/:id", UserController.delete)

module.exports = router
