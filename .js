document.addEventListener("DOMContentLoaded", function() {
    // Kodu nupp
    document.getElementById("homeBtn").addEventListener("click", function() {
        window.location.href = "index.html"; // Muuda siia oma kodulehe URL
    });

    // Kontakti nupp
    document.getElementById("contactBtn").addEventListener("click", function() {
        window.location.href = "contact.html"; // Muuda siia oma kontaktlehe URL
    });

    // Poodi nupp
    document.getElementById("shopBtn").addEventListener("click", function() {
        window.location.href = "shop.html"; // Muuda siia oma poe lehe URL
    });

    // Ostukorvi nupp
    document.getElementById("cartBtn").addEventListener("click", function() {
        window.location.href = "cart.html"; // Muuda siia oma ostukorvi lehe URL
    });
});
