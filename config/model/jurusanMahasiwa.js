const Sequelize=require("sequelize");
const db=require("../database/mysql")
// const mahasiswa=require("./mahasiswa")

var jurusanMahasiwa = db.define("jurusanMahasiwa",
{
    jurusan:{type:Sequelize.STRING,primarykey:true},
    nama_jurusan:Sequelize.STRING,
    
    
},{
    freezeTableName:true, //ketika sequelize medefine table secara default akan di tambahkan s contah mahasiswa menjadi mahasiswas maka untuk menghindari itu perlu setup freezeTableName:true
    timestamps:false // secara default sequelize akan memanggil fild create add dan update add karna di database kita belum ada paka kita setup timestamps ke false
});

// jurusanMahasiwa.hasOne(mahasiswa,{foreignKey:"jurusan"});
// jurusanMahasiwa.belongsTo(mahasiswa,{foreignKey:"jurusan"});

jurusanMahasiwa.removeAttribute("id"); //secara default sequelize akan memanggil fild id tapi karna kita belum ada fild id di table mahasiswa kita remove dulu
module.exports=jurusanMahasiwa;