const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')
const cookieParses = require('cookie-parser')

//agora express sabe que essa pasta serve arq estaticos
app.use(express.static('public'))
app.use(cookieParses())

// use -> midware
app.use(express.json())

app.use((req, res, next) => {
    console.log('Exec. Middleware')
    return next()
})

app.get('/setcookie', (req, res) => {
    res.cookie('user', 'Joao', { maxAge: 900000, httpOnly: true })
    return res.send('Cookie foi gravado com sucesso!')
})
app.get('/getcookie', (req, res) => {
    let user = req.cookies['user']
    if (user) {
        return res.send(user)
    }
})

//get -> consulta
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/admin', adminRoutes)
app.use('/user', userRoutes)

app.get('*', (req, res, next) => {
    setImmediate(() => {
        next(new Error('Temos um problema'))
    })
})

app.use((err, req, res, next) => {
    console.log('Geramos um erro, testando erros!')
    res.status(500).json({ message: err.message })
})

app.listen(3000, () => {
    console.log(`Server running: http://localhost:3000`)
})