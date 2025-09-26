const express = require('express');
const router = express.Router();

// 1. Importar o controller que acabamos de criar

const lojacontroller=require('../controllers/LojaController')

// 2. Definir a rota
//    Quando alguém fizer uma requisição GET para '/', esta rota será acionada
router.get("/",lojacontroller.testAgent)

router.get("/creatinas",lojacontroller.creatinas)

router.get("/pre-treinos",lojacontroller.preTreinos)

router.get("/vitaminas",lojacontroller.vitaminas)

router.get('/proteinas',lojacontroller.proteinas)


// 3. Exportar o router para ser usado na nossa aplicação principal
module.exports = router;