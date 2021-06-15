const express=require("express");
const router=express.Router();
// const db=require("../config/database/mysql");
const controler=require("../controler/index");

router.get('/',controler.query.sebagianData);
router.get('/alias',controler.query.filedKeyAlias);
router.get('/andlogic',controler.query.andLogic);
router.get('/orlogic',controler.query.orLogic);
router.get('/orlogiconefield',controler.query.orLogicOneField);
router.get('/betweenlogic',controler.query.betweenLogic);
router.get('/betweenlogiclimit',controler.query.orderLogicLimit);
router.get('/search',controler.query.getSearch)

module.exports = router;