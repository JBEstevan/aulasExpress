const express = require("express");
const jogo = require("./routes/jogo.js")
const genero = require("./routes/genero.js")
const estudio = require("./routes/estudio.js")
const publicadora = require("./routes/publicadora.js")

const app = express();
const port= 5000;

app.use(express.json());

app.use("/jogo", jogo_router);
app.use("/genero", genero_router);
app.use("/estudio", estudio_router);
app.use("/publicadora", publicadora_router);

app.listen(port, () => {
    console.log(`Server is running in ${port} port`);
});