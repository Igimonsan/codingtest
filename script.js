document.getElementById("orderForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Mencegah reload halaman

    const name = document.getElementById("name").value;
    const food = document.getElementById("food").value;

    const response = await fetch("https://your-backend-url.com/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, food }),
    });

    const result = await response.json();
    document.getElementById("responseMessage").innerText = result.message;
});
