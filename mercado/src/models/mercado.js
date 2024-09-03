let nextId = 1;

const model = (body, id = nextId++) => {
    if (
        body.nome != undefined &&
        body.endereco != undefined &&
        body.nome != "" &&
        body.endereco != ""
    ) {
        return {
            id,
            nome: body.nome,
            endereco: body.endereco
        }
    }
}

module.exports = model