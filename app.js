const express=require("express");
const app=express();
const morgan=require("morgan")
const bodyParser=require("body-parser")

const mahasiswaRoute=require("./routes/mahasiswa");
const queryRoute=require("./routes/query")

// app.use((req,res,next) => {
//     res.status(200).json({
//         massage:"ressful"
//     })
// })

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use("/mahasiswa", mahasiswaRoute) // router mahasiswa
app.use("/query", queryRoute)  // router query
app.use("/assets",express.static("assets")); //asset 

// ===== hendling error ======
app.use((req, res, next) => {
    const error=new Error("Tidak ditemukan");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message,
            status:error.status
        }
    })
})

// =======================


module.exports=app;