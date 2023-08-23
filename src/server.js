// importar o pacote esxpress 
const { request, response } = require("express");
const express = require("express");

// instanciar o express na variavel app
const app = express();

//definir a porta do servidor 
const PORT = 3004;

app.get("/api/teste", (request, response) => {
    response.send("Bora bill")
});

//listen para poder testar se o servidor esta rodando
app.listen(PORT, () => console.log(`Running at port ${PORT}`));