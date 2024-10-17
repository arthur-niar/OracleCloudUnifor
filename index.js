const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("<h1>Bem vindo!</h1>");
})

app.get("/games", function (req, res) {
    res.send("<h1>Lista de games!</h1>");
})

app.get("/cadastro/:game?", function (req, res) {
    var game = req.params.game
    if (game) {
        res.send("<h1> O jogo " + game + " foi adicionado!</h1>")
    } else {
        res.send("<h1>Jogo criado!</h1>")
    }
})

app.listen(3000, function (erro) {
    if (erro) {
        console.log("Erro ao iniciar.")
    } else {
        console.log("Servidor no ar.")
    }
})
