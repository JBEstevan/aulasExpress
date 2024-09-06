let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.criado_em != undefined &&
        body.atualizado_em != undefined &&
        body.nome != "" &&
        body.criado_em != "" &&
        body.atualizado_em != ""
    ) {
        return {
            id,
            nome: body.nome,
            atualizado_em: body.atualizado_em,
            criado_em: body.criado_em
        }
    }
}

module.exports = model