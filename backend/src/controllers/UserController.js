const users = [
  {
    "name" : "Vinicius",
    "favorite_musics" : [],
    "favorite_genre" : "Rock",
    "id" : 1
  },
  {
    "name" : "Bruno",
    "favorite_musics" : [],
    "favorite_genre" : "Rock",
    "id" : 2
  },
  {
    "name" : "Ary",
    "favorite_musics" : [],
    "favorite_genre" : "Pop",
    "id" : 3
  },
  {
    "name" : "Augusto",
    "favorite_musics" : [],
    "favorite_genre" : "Metal",
    "id" : 4
  },
]

function getUserById(id) {
  return users.filter(user => user.id == id)
}
module.exports = {
  index: async function(req, res) {
    return res.json(users)
  },
  show: async function(req, res) {
    const userId = req.params.id
    const user = getUserById(userId)
    return res.json(user)
  },
  create: async function(req, res) {
    const userData = req.body
    users.push(userData)
    return res.json({"status" : "ok"})
  },
  update: async function(req, res) {
    return res.send("Rota para atualizar um usuario")
  },
  delete: async function(req, res) {
    return res.send("Rota para deletar um usuario")
  },
}