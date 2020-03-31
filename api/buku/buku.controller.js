const{
    serviceAddBuku,
    serviceUpdateBuku,
    serviceDeleteBuku,
    serviceGetBuku,
    serviceGetBukuById
} = require("./buku.service")

const { checkToken } = require("../../auth/token_validation")
const { verify } = require("jsonwebtoken")

module.exports = {
    controllerAddBuku: (req, res)=>{
        let body = req.body
        let token = req.get("authorization")
        if(token){
            token = token.slice(7)
            verify(token, "secretkey", (err, decoded)=>{
                if(err){
                    res.json({
                        success: 0,
                        message: "login firts"
                    })
                }else{
                    var petugas = decoded.result
                    const data_buku ={
                        judul_buku: body.judul_buku,  //bagian database sebelah kiri
                        pengarang: body.pengarang,
                        penerbit: body.penerbit,
                        stok: body.stok,
                        nama_petugas: petugas.nama_petugas,
                        email: petugas.email
                        
                    }
                    //console.log(data_buku)
                    serviceAddBuku(data_buku, (err, results)=>{
                        if(err){
                            console.log(err)
                            return res.json({
                                success: 0,
                                message: "not success input buku"
                            })
                        }else{
                            return res.json({
                                success: 1,
                                message: "succes input new buku",
                                data: results
                            })
                        }
                    })
                }
            })
        }
    },
    
    controllerUpdateBuku: (req, res)=>{
        let body = req.body
        let token = req.get("authorization")
        if(token){
            token = token.slice(7)
            verify(token, "secretkey", (err, decoded)=>{
                if(err){
                    res.json({
                        success: 0,
                        message: "login firts"
                    })
                }else{
                    var petugas = decoded.result
                    const data_buku ={
                        id_buku: body.id_buku,
                        judul_buku: body.judul_buku,
                        pengarang: body.pengarang,
                        penerbit: body.penerbit,
                        stok: body.stok,
                        nama_petugas: petugas.nama_petugas,
                        email: petugas.email
                    }
                    console.log(data_buku)
                    serviceUpdateBuku(data_buku, (err, results)=>{
                        if(err){
                            if(err === "false"){
                                return res.json({
                                    success: 0,
                                    message: "user account access denied to access buku"
                                })
                            }
                            else{
                                return console.log(err)
                            }
                        }if(!results){
                            console.log(results)
                            return res.json({
                                success: 0,
                                message: "Data Not Found"
                            })
                        }else{
                            return res.json({
                                success: 1,
                                message: "Update succesfuly"
                            })
                        }
                    })
                }
            })
        }
    },
    
    controllerDeleteBuku:(req,res)=>{
        const body = req.body;
        serviceDeleteBuku(body,(err,results)=>{
            if(err){
                return res.json({
                    success:0,
                    message:"Not Found data"+err
                })
            }else{
                return res.json({
                    success:1,
                    message:"Delete Success"
                })
            }
        })
    },

    controllerGetBuku:(req,res)=>{
        serviceGetBuku((err,results)=>{
            if(err){
                console.log(err)
                return
            }else{
                return res.json({
                    success:1,
                    data:results
                })
            }
        })
    },

    controllerGetBukuById:(req,res)=>{
        const data = req.params.id_buku;
        serviceGetBukuById(data,(err,results)=>{
            if(err){
                return res.json({
                    success:0,
                    message:"Not Found"
                })
            }else{
                return res.json({
                    success:1,
                    data:results
                })
            }
        })
    },
}