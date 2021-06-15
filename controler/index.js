const mahasiswa=require("./mahasiswa")
const query=require("./query")

const controler={};

controler.mahasiswa=mahasiswa;
controler.query=query;

module.exports=controler;



// file ini berpungsi untuk menampung controler kita seandanya kita memiliki banyak cintroler
// kita tidak perlu repot untuk mengekport satu satu cukup ditampung di file index.js dan hanya file index saja yang di panggil/di export