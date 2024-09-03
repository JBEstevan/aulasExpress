const express = require("express")
const cep_endereco = require("./middlewares/cep_endereco.js")
const fornecedor_controller = require("./controllers/fornecedor.js")
const mercado_controller = require("./controllers/mercado.js")
const produto_controller = require("./controllers/produto.js")
const app = express()
const port = 3333


app.use(express.json())

app.use(cep_endereco)

//fornecedor

app.get("/fornecedor", (req, res) => {
    res.json(fornecedor_controller.index())
})

app.get("/fornecedor/:id", (req, res) => {
    res.json(fornecedor_controller.show(req.params.id))
})

app.post("/fornecedor", (req, res) => {
    const code = fornecedor_controller.store(req.body)
    res.status(code).json()
})

app.put("/fornecedor/:id", (req, res) => {
    const code = fornecedor_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/fornecedor/:id", (req, res) => {
    cliente_controller.destroy(req.params.id)
    res.json()
})

//mercado

app.get("/mercado"), (req, res) => {
    res.json(mercado_controller.index())
}

app.get("/mercado/:id"), (req, res) => {
    res.json(mercado_controller.show(req.params.id))
}

app.post("/mercado"), (req, res) => {
    const code = mercado_controller.store(req.body)
    res.status(code).json
}

app.put("/mercado/:id", (req, res) => {
    const code = mercado_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/mercado/:id", (req, res) => {
    mercado_controller.destroy(req.params.id)
    res.json()
})

//produto

app.get("/produto"), (req, res) => {
    res.json(produto_controller.index())
}

app.get("/produto/:id", (req, res) => {
    res.json(produto_controller.show(req.params.id))
})

app.post("/produto", (req, res) => {
    const code = produto_controller.store(req.body)
    res.status(code).json()
})

app.put("/produto/:id", (req, res) => {
    const code = produto_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/produto/:id", (req, res) => {
    produto_controller.destroy(req.params.id)
    res.json()
})

app.listen(port, () => {
    console.log("Server is running in " + port + "")
})