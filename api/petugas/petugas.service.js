const db = require("../../config/connection")

module.exports = {
    serviceAddPetugas: (data, callBack)=>{
        db.query(
            `insert into petugas(nama_petugas, jabatan, nomor_telepon, email, password)
            values (?,?,?,?,?)`,
            [
                data.nama_petugas,
                data.jabatan,
                data.nomor_telepon,
                data.email,
                data.password
            ],
            (error, result, fields) =>{
                if(error){
                    return callBack(error);
                }else{
                    return callBack(null, result)
                }
            }
        )
    },
    serviceGetPetugas: callBack =>{
        db.query(
            `select * from petugas`,
            [],
            (err, results, fields)=> {
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, results)
                }
            }
        )
    },
    serviceGetPetugasById: (id, callBack)=>{
        db.query(
            `select * from petugas where id_petugas = ?`,
            [id],
            (err, results, fields) => {
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, results[0])
                }
            }
        )
    },
    serviceUpdatePetugas: (data, callBack)=>{
        db.query(
            `update petugas set nama_petugas=?, jabatan=?, nomor_telepon=?, email=?, password=? where id_petugas=?`,
            [
                data.nama_petugas,
                data.jabatan,
                data.nomor_telepon,
                data.email,
                data.password,
                data.id_petugas
            ],
            (err, results, fields) => {
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, results)
                }
            }
        )
    },
    serviceDeletePetugas: (data, callBack) =>{
        db.query(`select * from petugas where id_petugas=?`, 
        [data.id_petugas],
        (err, result)=>{
            if(err){
                callBack(err)
            }if(!result){
                callBack(result)
                // console.log(result)
            }
            else{
                db.query(`delete from petugas where id_petugas=?`,
                [data.id_petugas]
                )
                // console.log(results)
                return callBack(null, result[0])
            }
        })
    },

    serviceGetPetugasByEmail: (email, callBack)=>{
        db.query(
            `select nama_petugas, email,  password from petugas where email = ?`,
            [email],
            (err, results, fields) => {
                if(err){
                    return callBack(err)
                }else{
                    return callBack(null, results[0])
                }
            }
        )
    }
}