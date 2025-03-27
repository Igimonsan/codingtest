document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil nilai dari input form
    const name = document.getElementById("name").value;
    const food = document.getElementById("food").value;

    // Pastikan data tidak kosong
    if (!name || !food) {
        alert("Silakan isi semua data sebelum memesan.");
        return;
    }

    // Nomor WhatsApp tujuan (GANTI dengan nomor kamu tanpa tanda +, contoh: 6281234567890)
    const phoneNumber = "6289519705542";

    // Format pesan WhatsApp
    const message = `Halo, saya *${name}* ingin memesan:\n🍽️ *${food}*`;

    // Encode pesan agar cocok untuk URL
    const encodedMessage = encodeURIComponent(message);

    // Buat link WhatsApp
    const whatsappURL = `https://wa.me/6289519705542?text=${encodedMessage}`;

    // Buka WhatsApp dengan pesanan
    window.open(whatsappURL, "_blank");
});
