CREATE DATABASE sekolah;

CREATE TABLE siswa(
    id_siswa SERIAL PRIMARY KEY,
    nama_siswa VARCHAR(100),
    kelas VARCHAR(20),
    jurusan VARCHAR(20),
    no_hp INTEGER,
    email VARCHAR(50),
    tgl_lahir DATE
);