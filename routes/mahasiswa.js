const express=require("express");
const router=express.Router();
const db=require("../config/database/mysql");
const controler=require("../controler/index");

const multer = require('multer');
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, './assets/');
    },
    filename:function(req, file, cb){
        const crypto=require('crypto');
        const random=crypto.randomBytes(10).toString('hex');
        cb(null,random+"_"+file.originalname);
    }
});
const upload = multer({storage:storage});

router.get('/all',controler.mahasiswa.getAll);
router.get('/:nime',controler.mahasiswa.getOne);
router.post('/',upload.single('poto'),controler.mahasiswa.pos);
router.put('/:nime',controler.mahasiswa.put);
router.delete('/:nime',controler.mahasiswa.delete);
// router.get('/minku',controler.mahasiswa.getMin);


module.exports = router