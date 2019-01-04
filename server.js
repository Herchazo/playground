const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/hola', (req, res) => {
    res.send('<h1>Hola pepe!</h1>')
})

app.post('/form', (req, res) => {
    const { email, password } = req.body
    
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Guardando datos...')

    res.send(`<h1>Usuario creado!<h1><p><b>Email</b>: ${email}<p>`)
})

const port = 3000
app.listen(port, err => {
    if (err) {
        return console.error('Cannot start server:', err)
    }
    console.log(`Servidor escuchando en: http://localhost:${port}`)
})