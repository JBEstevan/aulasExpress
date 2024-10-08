const model = require("../models/estudio.js"); 

const db = []

const index = () => db

const show = id => db.find(el => el.id == id)

const store = (body) => {
    console.log(body)
    const novo = model(body)

    if (novo) {
        db.push(novo)
        return 201
    }

    return 400
}

const update = (body, id) => {
    const indice = db.findIndex(el => el.id == id)
    const data_estudio = db.find(el => el.id == id)
    const novo = model(body, parseInt(id), data_estudio.criado_em)

    if (novo && indice != -1) {
        db[indice] = novo
        return 200
    }

    return 400
}

const destroy = id => {
    const indice = db.findIndex(el => el.id == id)
    if (indice != -1) {
        db.splice(indice, 1)
    }
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}