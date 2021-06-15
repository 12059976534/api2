const Sequelize=require("sequelize");
const db=require("../database/mysql")
const jurusanMahasiwa=require("./jurusanMahasiwa")

var mahasiswa = db.define("mahasiswa",
{
    nime:Sequelize.STRING,
    nama:Sequelize.STRING,
    jurusan:Sequelize.STRING,
    poto:Sequelize.STRING,

},{
    freezeTableName:true, //ketika sequelize medefine table secara default akan di tambahkan s contah mahasiswa menjadi mahasiswas maka untuk menghindari itu perlu setup freezeTableName:true
    timestamps:false // secara default sequelize akan memanggil fild create add dan update add karna di database kita belum ada paka kita setup timestamps ke false
});

mahasiswa.hasOne(jurusanMahasiwa,{foreignKey: "jurusan"});
mahasiswa.belongsTo(jurusanMahasiwa,{foreignKey: "jurusan",targetKey: 'jurusan'},);

mahasiswa.removeAttribute("id"); //secara default sequelize akan memanggil fild id tapi karna kita belum ada fild id di table mahasiswa kita remove dulu
module.exports=mahasiswa;