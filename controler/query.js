const model=require("../config/model/index");
const controler={};
const {Op} = require("sequelize");
const db = require("../config/database/mysql");

// menampilkan sebagian data
controler.sebagianData = async function(req,res){
    try {
        let mahasiswa = await db.query('SELECT mahasiswa.nime as nim,mahasiswa.nama as name,mahasiswa.jurusan as jurusan,mahasiswa.poto,jurusanMahasiwa.nama_jurusan as jurusanName FROM mahasiswa JOIN jurusanMahasiwa on mahasiswa.jurusan = jurusanMahasiwa.jurusan ORDER BY mahasiswa.nime ' )
        // let mahasiswa= await model.mahasiswa.findAll({
        //     attributes:['nime','nama'],
        //     include:[
        //         {model:model.jurusanMahasiwa}
        //     ]
        // });
            if (mahasiswa.length > 0){
                res.status(200).json({
                    message:"get method mahasiswa",
                    data:mahasiswa
                });
            }else{
                res.status(200).json({
                    message:"tidak ada data",
                    data:[]
                });
            }
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        });
    }
}

// filed alias
controler.filedKeyAlias = async function(req,res){
    try {
        let mahasiswa= await model.mahasiswa.findAll({
            attributes:[['nime','nimeMahasiswa'],['nama','namaMahasiswa'],['jurusan','jurusanMahasiswa'],['poto','potoMahasiswa']],

        });
            if (mahasiswa.length > 0){
                res.status(200).json({
                    message:"get method mahasiswa",
                    data:mahasiswa
                });
            }else{
                res.status(200).json({
                    message:"tidak ada data",
                    data:[]
                });
            }
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        });
    }
}

// query andlogic(logika and)
controler.andLogic = async function(req,res){
    try {
        let mahasiswa= await model.mahasiswa.findAll({
            attributes:[['nime','nimeMahasiswa'],['nama','namaMahasiswa'],['jurusan','jurusanMahasiswa'],['poto','potoMahasiswa']],
            where:{
                [Op.and]:[
                    {nama:"andri wahyu anugrah"},
                    {jurusan:"Tekni Imformatika"}
                ]
            }
        });
            if (mahasiswa.length > 0){
                res.status(200).json({
                    message:"get method mahasiswa",
                    data:mahasiswa
                });
            }else{
                res.status(200).json({
                    message:"tidak ada data",
                    data:[]
                });
            }
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        });
    }
}

// query or logic (logika or)
controler.orLogic = async function(req,res){
    try {
        let mahasiswa= await model.mahasiswa.findAll({
            attributes:[['nime','nimeMahasiswa'],['nama','namaMahasiswa'],['jurusan','jurusanMahasiswa'],['poto','potoMahasiswa']],
            where:{
                [Op.or]:[
                    {nime:"180202004"},
                    {nama:"andri wahyu anugrah"}
                ]
            }
        });
            if (mahasiswa.length > 0){
                res.status(200).json({
                    message:"get method mahasiswa",
                    data:mahasiswa
                });
            }else{
                res.status(200).json({
                    message:"tidak ada data",
                    data:[]
                });
            }
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        });
    }
}

// query or logic with one field
controler.orLogicOneField = async function(req,res){
    try {
        let mahasiswa= await model.mahasiswa.findAll({
            attributes:[['nime','nimeMahasiswa'],['nama','namaMahasiswa'],['jurusan','jurusanMahasiswa'],['poto','potoMahasiswa']],
            where:{
                nime:{
                    [Op.or]:['180202003','180202006']
                }
            }
        });
            if (mahasiswa.length > 0){
                res.status(200).json({
                    message:"get method mahasiswa",
                    data:mahasiswa
                });
            }else{
                res.status(200).json({
                    message:"tidak ada data",
                    data:[]
                });
            }
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        });
    }
}

// query between opration
controler.betweenLogic = async function(req,res){
    try {
        let mahasiswa= await model.mahasiswa.findAll({
            attributes:[['nime','nimeMahasiswa'],['nama','namaMahasiswa'],['jurusan','jurusanMahasiswa'],['poto','potoMahasiswa']],
            where:{
                nime:{
                    [Op.between]:['180202003','180202005']
                }
            }
        });
            if (mahasiswa.length > 0){
                res.status(200).json({
                    message:"get method mahasiswa",
                    data:mahasiswa
                });
            }else{
                res.status(200).json({
                    message:"tidak ada data",
                    data:[]
                });
            }
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        });
    }
}

//order opration
controler.orderLogic = async function(req,res){
    try {
        let mahasiswa= await model.mahasiswa.findAll({
            attributes:[['nime','nimeMahasiswa'],['nama','namaMahasiswa'],['jurusan','jurusanMahasiswa'],['poto','potoMahasiswa']],
            where:{
                nime:{
                    [Op.between]:['180202003','180202005']
                }
            },
            order:[['nime','asc']] // you can use asc or desc
        });
            if (mahasiswa.length > 0){
                res.status(200).json({
                    message:"get method mahasiswa",
                    data:mahasiswa
                });
            }else{
                res.status(200).json({
                    message:"tidak ada data",
                    data:[]
                });
            }
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        });
    }
}

// limit
controler.orderLogicLimit = async function(req,res){
    try {
        let mahasiswa= await model.mahasiswa.findAll({
            attributes:[['nime','nimeMahasiswa'],['nama','namaMahasiswa'],['jurusan','jurusanMahasiswa'],['poto','potoMahasiswa']],
            where:{
                nime:{
                    [Op.between]:['180202003','180202005']
                }
            },
            order:[['nime','asc']], // you can use asc or desc
            limit:2  
        });
            if (mahasiswa.length > 0){
                res.status(200).json({
                    message:"get method mahasiswa",
                    data:mahasiswa
                });
            }else{
                res.status(200).json({
                    message:"tidak ada data",
                    data:[]
                });
            }
        
    } catch (error) {
        res.status(404).json({
            message:error.message,
        
        });
    }
}


//getsearch
controler.getSearch = async function(req,res){
    const search = req.query.keyword;
    try {
        let mahasiswa= await model.mahasiswa.findAll({
            attributes:['nime','nama','jurusan'],
            where:{
                [Op.or]:[
                    {nime:{[Op.like]:'%'+search+'%'}},
                    {nama:{[Op.like]:'%'+search+'%'}}
                ]
            }
        });
            if (mahasiswa.length > 0){
                res.status(200).json({
                    message:"get method mahasiswa",
                    data:mahasiswa
                });
            }else{
                res.status(200).json({
                    message:"tidak ada data",
                    data:[]
                });
            }
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        });
    }
}


module.exports = controler;