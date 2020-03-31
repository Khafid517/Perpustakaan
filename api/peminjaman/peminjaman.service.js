const db = require('../../config/connection');
module.exports={
    serviceCekBuku:(data,callBack)=>{
        db.query(
            `select * from buku where email=?`,
            [data],
            (err,results)=>{
                console.log(results)
                if(err){
                    console.log(err)
                    return callBack(err);   
                }else if(results.length < 1){
                    return callBack("buku not found")
                }else if(results[0].stok <= 0){
                    console.log(results[0].stok);
                    return callBack("out of stok");

                }else{
                    return callBack(null,results);
                }
            }
        )
    },

    serviceGetBuku: callBack=>{
        db.query(`select * from buku`,
        [],
        (err, result)=>{
            if(err){
                return callBack(err)
            }else{
                return callBack(null, result)
            }
        })
    },

    servicePinjamBuku:(data,callBack)=>{
        db.query(
            `select * from buku where id_buku=?`,
            [data.id_buku],(err,results)=>{
                console.log(data.nama_peminjam)
                console.log(results[0].petugas)
                if(err){
                    console.log(err);
                    return callBack(err)
                }if(results.length < 1){
                    return callBack("No-Id")  
                }else if(results[0].stok <= 0){
                    return callBack("out of stok")
                }else if(results[0].stok < data.stok){
                    return callBack("stok tidak cukup")
                }else if(data.nama_peminjam === results[0].petugas){
                    return callBack("myBuku")
                }
                else{
                    const data_buku = results[0];
                    const total = data_buku.harga * data.jumlah
                    const hasil = results[0].stok - data.jumlah
                    console.log(results[0].nama_barang);
                    db.query(
                        `update barang set stok=? where id_barang=?`,
                        [
                            hasil,
                            data.id_barang
                        ]
                    );
                    db.query(
                        `insert into transaksi(nama_barang,nama_pemilik,harga,jumlah_barang,total,nama_pembeli)
                            values(?,?,?,?,?,?)`,
                            [
                                results[0].nama_barang,
                                results[0].owner, //pemilik
                                data_barang.harga,
                                data.jumlah,
                                total,
                                data.nama_pembeli //pembeli
                            ], (err, res)=>{
                                console.log(res)
                            }
                    );

                    return callBack(null,results)
                }
            }
        )
    }
}