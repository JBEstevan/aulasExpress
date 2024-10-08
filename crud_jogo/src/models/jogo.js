const estudio_controller = require("../controllers/estudio.js")
const genero_controller = require("../controllers/genero.js")
const publicadora_controller = require("../controllers/publicadora.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        genero_controller.show(body.genero_id) &&
        estudio_controller.show(body.estudio_id) &&
        publicadora_controller.show(body.publicadora_id) &&
        body.lancado_em != undefined &&
        body.criado_em != undefined &&
        body.atualizado_em != undefined &&
        body.nome != "" &&
        body.lancado_em != "" &&
        body.criado_em != "" &&
        body.atualizado_em != ""
    ) {
        return {
            id,
            nome: body.nome,
            genero_id: body.genero_id,
            estudio_id: body.estudio_id,
            publicadora_id: body.publicadora_id,
            lancado_em: body.lancado_em,
            criado_em: body.criado_em,
            atualizado_em: body.atualizado_em
        }
    }
}

module.exports = model