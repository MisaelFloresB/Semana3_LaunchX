// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
});

//http method
app.get('/v1/explorers', (req, res) =>{
    console.log(`Api Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id: 1, name: "Misael"}
    const explorer2 = {id: 2, name: "Abiu"}
    const explorer4 = {id: 3, name: "Abril"}
    const explorer3 = {id: 4, name: "Michel"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]

    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res)=>{
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer whit id ${req.params.id}`)
    const explorers = {id: 1, name:"Misael"}

    res.status(200).json(explorers)
})

app.post('/v1/explorers', (req,res)=>{
    console.log(`Api explorer POST request ${new Date}`)
    const requestBody = req.body //Parametros de un cliente
    res.status(201).json({message: "Created"})
})

//PUT actualiza regristros
app.put('/v1/explorers/:id', (req,res)=>{
    console.log(`Api explorer PUT request ${new Date}`)
    console.log(`Update explorer whit id ${req.params.id}`)
    const requestBody = req.body //parametros de un cliente
    res.status(200).json({message: "Update"})
})

//DELATE borra un registro o parametro
app.delete('/v1/explorers/:id', (req,res)=>{
    console.log(`Api explorer DELETE request ${new Date}`)
    console.log(`Delete explorer whit id: ${req.params.id}`)

    const requestBody = req.body //parametros de un cliente
    res.status(200).json({message: "Deleted"})
})