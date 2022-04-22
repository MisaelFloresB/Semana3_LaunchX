// usando objeto en express
const express = require("express");

//app de express
const app = express()

// Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000

// path inicial, respondera a la url localhost:3000
app.get('/', (req, res) =>{
    res.send("Hello world!")
});

// Con esto inicializamos nuestra app

app.listen(port, () =>{
    console.log(`example app listening on port ${port}`)
});

//Respondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req, res)=>{
    res.send('Bienvenidos a Launch X')
})

// Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res)=>{
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer)
})

//Query Params: Recibir parametros por la URL
// http://localhost:3000/explorers/carlo
//req.params = {explorerName: "misael"}
app.get('/explorers/:explorerName', (req, res)=>{

    res.send(req.params)
})
