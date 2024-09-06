const upper = (req, res, next) => {
    const nomeUpper = req.body.nome.toUpperCase()

    req.body.nome = nomeUpper

    next();
}

module.exports = upper