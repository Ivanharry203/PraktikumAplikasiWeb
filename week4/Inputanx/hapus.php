<?php
include 'config.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "DELETE FROM users WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Data berhasil dihapus!";
    } else {
        echo "Gagal menghapus data: " . $conn->error;
    }
}
?>
