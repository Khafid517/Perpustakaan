-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 31 Mar 2020 pada 02.54
-- Versi server: 10.1.36-MariaDB
-- Versi PHP: 7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpustakaan`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `anggota`
--

CREATE TABLE `anggota` (
  `id_anggota` int(50) NOT NULL,
  `nama_anggota` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `telepon` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `anggota`
--

INSERT INTO `anggota` (`id_anggota`, `nama_anggota`, `gender`, `alamat`, `telepon`, `email`, `password`) VALUES
(1, 'Ihab', 'P', 'Pasuruan', 2147483647, 'ihab@gmail.com', '$2b$10$TekDcyJ/.lCVyzc6gxLRl.FGyhxvpuWLbsQAPYOCvLtQ0YhwJ.Ga6'),
(2, 'Lala', 'L', 'Bali', 2147483647, 'lala@gmail.com', '$2b$10$jPNGWJfG2VJtPYe.TSBRG.QBQUTtFCK9vjRqr1vqDEKVddrx60eoi'),
(3, 'Rani', 'L', 'Surabaya', 2147483647, 'rani@gmail.com', '$2b$10$kgfNSCQ28fn5LABfWdoKkurGTjElFfvfqysbAVWSrK0Rjy1m/h0zO');

-- --------------------------------------------------------

--
-- Struktur dari tabel `buku`
--

CREATE TABLE `buku` (
  `id_buku` int(50) NOT NULL,
  `judul_buku` varchar(255) NOT NULL,
  `pengarang` varchar(255) NOT NULL,
  `penerbit` varchar(255) NOT NULL,
  `stok` int(255) NOT NULL,
  `nama_petugas` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `buku`
--

INSERT INTO `buku` (`id_buku`, `judul_buku`, `pengarang`, `penerbit`, `stok`, `nama_petugas`, `email`) VALUES
(1, 'Pulang', 'Tere Liye', 'Republika Penerbit', 100, 'Safira', 'safira@gmail.com'),
(2, 'Hujan', 'Tere Liye', 'Gramedia Pustaka Utama', 100, 'Safira', 'safira@gmail.com'),
(3, 'Rindu', 'Tere Liye', 'Penerbit Republika', 100, 'Islanty', 'islanty@gmail.com'),
(4, 'Bidadari-Bidadari Surga', 'Tere Liye', 'Republika', 100, 'Islanty', 'islanty@gmail.com');

-- --------------------------------------------------------

--
-- Struktur dari tabel `petugas`
--

CREATE TABLE `petugas` (
  `id_petugas` int(255) NOT NULL,
  `nama_petugas` varchar(255) NOT NULL,
  `jabatan` varchar(255) NOT NULL,
  `nomor_telepon` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `petugas`
--

INSERT INTO `petugas` (`id_petugas`, `nama_petugas`, `jabatan`, `nomor_telepon`, `email`, `password`) VALUES
(1, 'Safira', 'Pegawai', 2147483647, 'safira@gmail.com', '$2b$10$x5gWPbNDGuuPlC1Sn6SAbuX0e9OtnCsdIeurqXI/2cABrnkB/O1tO'),
(2, 'Igor', 'Pengurus', 2147483647, 'igor@gmail.com', '$2b$10$JToLfBngKkkV5tNkJrYmze/LpDcT6waq5cSy/zpIQHD66gjJsA8d6'),
(4, 'Islanty', 'Pegawai', 2147483647, 'islanty@gmail.com', '$2b$10$9ut9MdKIQk.p33DP1CjCu.z9PWQxymvGA0oCVK1hY7xChgTtMVMay');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `anggota`
--
ALTER TABLE `anggota`
  ADD PRIMARY KEY (`id_anggota`);

--
-- Indeks untuk tabel `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`id_buku`);

--
-- Indeks untuk tabel `petugas`
--
ALTER TABLE `petugas`
  ADD PRIMARY KEY (`id_petugas`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `anggota`
--
ALTER TABLE `anggota`
  MODIFY `id_anggota` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `buku`
--
ALTER TABLE `buku`
  MODIFY `id_buku` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `petugas`
--
ALTER TABLE `petugas`
  MODIFY `id_petugas` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
