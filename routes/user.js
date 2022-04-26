const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Lista de usuários!')
})

router.get('/:id', (req, res)=>{
    res.send('Mostrando o usuário com id: ' + req.params.id)
})

module.exports = router  