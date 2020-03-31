require("dotenv").config();
const express = require('express')
const app = express();
const petugasRouter = require("./api/petugas/petugas.router")
const bukuRouter = require("./api/buku/buku.router")
const anggotaRouter = require("./api/anggota/anggota.router")
//const transaksiRouter = require("./api/transaksi/transaksi.router")


app.use(express.json())
app.use("/petugas", petugasRouter)
app.use("/buku", bukuRouter)
app.use("/anggota", anggotaRouter)
app.use("/pinjam", transaksiRouter)


app.listen(process.env.APP_PORT, ()=>{
    console.log("running on port" + process.env.APP_PORT)
})