<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $telepon = $_POST['telepon'];
    $alamat = $_POST['alamat'];
    $tanggal_lahir = $_POST['tanggal_lahir'];
    $jenis_kelamin = $_POST['jenis_kelamin'];

    $sql = "INSERT INTO users (nama, email, telepon, alamat, tanggal_lahir, jenis_kelamin) 
            VALUES ('$nama', '$email', '$telepon', '$alamat', '$tanggal_lahir', '$jenis_kelamin')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Data berhasil disimpan!";
    } else {
        echo "Gagal menyimpan data: " . $conn->error;
    }
}
?>
