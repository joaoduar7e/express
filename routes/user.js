const express = require('express')
const router = express.Router()

function logReq(req, res, next) {
    console.log('Exec. Middleware para a rota de usuário')
    return next()
}


router.get('/', logReq, (req, res)=>{
    res.send('Lista de usuários!')
})

router.get('/:id', (req, res)=>{
    res.send('Mostrando o usuário com id: ' + req.params.id)
})

module.exports = router  