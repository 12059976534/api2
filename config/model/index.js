const mahasiswa=require("./mahasiswa");
const jurusanMahasiwa=require("./jurusanMahasiwa")
const model = {};

model.mahasiswa=mahasiswa;
model.jurusanMahasiwa=jurusanMahasiwa;
module.exports = model;

// file ini berfungsi untuk menapung model seandainya kita memiliki banyak model seperti mahasiswa dosen matakuliah dll
// kita tidak perlu repot mengexport model nya satu satu cukup hanya mengexport index.js untuk dipanggil