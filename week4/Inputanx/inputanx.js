document.addEventListener("DOMContentLoaded", function() {
    loadData();

    document.getElementById("inputForm").addEventListener("submit", function(e) {
        e.preventDefault();

        let formData = new FormData(this);

        fetch("simpan.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            loadData();
            this.reset();
        });
    });
});

function loadData() {
    fetch("tampil.php")
    .then(response => response.json())
    .then(data => {
        let tableBody = document.getElementById("dataTable");
        tableBody.innerHTML = "";

        data.forEach(item => {
            let row = `<tr>
                <td>${item.nama}</td>
                <td>${item.email}</td>
                <td>${item.telepon}</td>
                <td>${item.alamat}</td>
                <td>${item.tanggal_lahir}</td>
                <td>${item.jenis_kelamin}</td>
                <td><button onclick="hapusData(${item.id})">Hapus</button></td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    });
}

function hapusData(id) {
    if (confirm("Yakin ingin menghapus?")) {
        fetch(`hapus.php?id=${id}`)
        .then(response => response.text())
        .then(data => {
            alert(data);
            loadData();
        });
    }
}
