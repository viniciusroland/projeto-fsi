module.exports = {
  index: async function(req, res) {
    return res.send("Rota para mostrar todos os usuario")
  },
  show: async function(req, res) {
    return res.send("Rota para mostrar um usuario")
  },
  create: async function(req, res) {
    return res.send("Rota para criar usuario")
  },
  update: async function(req, res) {
    return res.send("Rota para atualizar um usuario")
  },
  delete: async function(req, res) {
    return res.send("Rota para deletar um usuario")
  },
}