document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;
    // Simpan data login di localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('role', role);
    alert('Login berhasil sebagai ' + role);
    window.location.href = 'index.html';
});

function beliTiket(film, tanggal, waktu, jumlah) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        var tiket = {
            film: film,
            tanggal: tanggal,
            waktu: waktu,
            jumlah: jumlah,
            username: currentUser.username
        };

        var tiketList = JSON.parse(localStorage.getItem('tiketList')) || [];
        tiketList.push(tiket);
        localStorage.setItem('tiketList', JSON.stringify(tiketList));
        alert('Tiket berhasil dibeli!');
    } else {
        alert('Silakan login terlebih dahulu');
        window.location.href = 'login.html';
    }
}

        // Handle logout
        document.getElementById('logout-button').addEventListener('click', function() {
            // Hapus data pengguna dari localStorage
            localStorage.removeItem('currentUser');
            alert('Anda telah logout.');
            window.location.href = 'login.html';
        });