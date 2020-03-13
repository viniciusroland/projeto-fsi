const express = require('express')
const router = express.Router()
const UserController = require('./controllers/UserController')
const SpotifyService = require('./services/SpotifyService')

router.get("/users", UserController.index)
router.get("/users/:id", UserController.show)
router.post("/users", UserController.create)
router.patch("/users/:id", UserController.update)
router.delete("/users/:id", UserController.delete)
router.get("/auth_spotify", SpotifyService.authenticate)
router.get("/spotify/get-access-token", SpotifyService.getAccessToken)


module.exports = router
