'use strict';

var response = require('./res');
const pool = require('./db');

exports.siswa = async(req, res) => {

    try {
        const allSiswa = await pool.query("SELECT * FROM siswa");

         res.json(allSiswa.rows);
    } catch (error) {
        console.log(error.message);
    }
};

//get sesuai id

exports.siswaId = async(req, res) => {
    const {id} = req.params;
    try {
        const siswa = await pool.query("SELECT * FROM siswa WHERE id_siswa = $1", [id]);

         res.json(siswa.rows[0]);

    } catch (error) {
        console.log(error.message);
    }
};

//create siswa
exports.createSiswa = async(req, res) =>{
    try {
        const {nama_siswa} = req.body;
        const {kelas} = req.body;
        const {jurusan} = req.body;
        const {no_hp} = req.body;
        const {email} = req.body;
        const {tgl_lahir}= req.body;
        
        const newSiswa = await pool.query("INSERT INTO siswa (nama_siswa,kelas,jurusan,no_hp,email,tgl_lahir) VALUES ($1,$2,$3,$4,$5,$6) RETURNING*", [nama_siswa,kelas,jurusan,no_hp,email,tgl_lahir]);
         res.json(newSiswa.rows[0]); 

    } catch (error) {
        console.log(error.message);
    };
}


// update siswa
exports.ubahSiswa = async(req, res) => {
    try {
        const {id} = req.params;
        const {nama_siswa} = req.body;
        const {kelas} = req.body;
        const {jurusan} = req.body;
        const {no_hp} = req.body;
        const {email} = req.body;
        const {tgl_lahir}= req.body;
 
        const updateSiswa = await pool.query("UPDATE siswa SET nama_siswa=$1, kelas=$2, jurusan=$3, no_hp=$4, email=$5, tgl_lahir=$6 WHERE id_siswa=$7", [nama_siswa, kelas, jurusan, no_hp, email, tgl_lahir, id]);

         res.json("Siswa Succesfuly Updated");
    } catch (error) {
        console.log(error.message);
    }
} 

// delete siswa
exports.deletesiswa = async(req, res) =>{
    try {
        const {id} = req.params;
        const deletSiswa = await pool.query("DELETE FROM siswa WHERE id_siswa = $1", [id]);

         res.json("Delete Siswa Succesfuly");
    } catch (error) {
        console.log(error.message);
    }
}