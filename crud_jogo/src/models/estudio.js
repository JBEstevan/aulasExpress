let proxId = 1;

const model = (body, id = proxId++, date) => {
    const now = new Date();
    if(
        body.nome != undefined 
    ) {
        return {
            id,
            nome: body.nome,
            atualizado_em: date != undefined ? date : now,
            criado_em: now
        }
    }
}

module.exports = model