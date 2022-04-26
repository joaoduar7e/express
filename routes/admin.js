const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Vai corinthians!')
})

router.get('/:id', (req, res)=>{
    res.send('O melhor time é: ' + req.params.id)
})

router.post('/', (req, res)=>{
    const corpo = `Time: ${req.body.nome}\nCor: ${req.body.cor}`
    res.send('Acessando os times com POST \n' + corpo)
})

//variação do PUT para alterção de dados
router.patch('/:id', (req, res)=>{
    res.send('Acessando os times com PATCH')

})
router.put('/:id', (req, res)=>{
    res.send('Acessando os times com PUT')

})
router.delete('/:id', (req, res)=>{
    res.send('Acessando os times com DELETE')

})

module.exports  = router  