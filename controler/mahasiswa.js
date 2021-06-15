const model=require("../config/model/index");
const fs = require('fs');
const mahasiswa = require("../config/model/mahasiswa");
const controler={};


controler.getAll = async function(req,res){
    try {
        let mahasiswa= await model.mahasiswa.findAll()
            
            if (mahasiswa.length > 0){
                res.status(200).json({
                    message:"get method mahasiswa",
                    data:mahasiswa
                })
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

controler.getOne = async function(req, res){
    try {
        let mahasiswa = await model.mahasiswa.findAll({
            where:{
                nime:req.params.nime
            }
        });
        if (mahasiswa.length > 0){
            res.status(200).json({
                message:"mahasiswa di temukan",
                data:mahasiswa
            })
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

controler.pos = async function(req, res){
    // console.log(req);
    try {
        let mahasiswa = await model.mahasiswa.create({
            nime:req.body.nime,
            nama:req.body.nama,
            jurusan:req.body.jurusan,
            poto:req.file.path,
        });
        // console.log(mahasiswa)
        res.status(201).json({
            message: "berhasil tambah data",
            data:mahasiswa
        })    
    } catch (error) {
        res.status(404).json({
            message:error.message
        });
    }
}

controler.put = async function(req, res){
    try {
        let mahasiswa = await model.mahasiswa.update({
            nama:req.body.nama,
            jurusan:req.body.jurusan,
            poto:req.file.path
        },{
            where:{
                nime: req.params.nime
            }
        });
        res.status(200).json({
            message: "berhasil ubah data",
            data:mahasiswa
        })    
    } catch (error) {
        res.status(404).json({
            message:error.message
        });
    }
}

controler.delete = async function(req, res){
    try {
        let getmahasiswa = await model.mahasiswa.findAll({
            attributes:['poto'],
            where:{
                nime:req.params.nime
            }
            });


        let mahasiswa = await model.mahasiswa.destroy({
            where:{
                nime:req.params.nime
            }
        });
        const name=getmahasiswa[0].dataValues.poto
        const path=name
        fs.unlink(path, (err) => {
            if(err){
                console.error(err)
            }else{
                console.log(path)
            }
        })

        res.status(200).json({
            message:"berhasil hapus data",
        })
    } catch (error) {
        res.status(404).json({
            message:error.message,
        });
    }
}



module.exports = controler;