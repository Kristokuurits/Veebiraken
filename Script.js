document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.cart-item input');
    const totalElement = document.querySelector('.cart-total');
    const clearCartBtn = document.getElementById('clearCartBtn');

    function updateTotal() {
        let total = 0;
        items.forEach(item => {
            const quantity = parseInt(item.value);
            const price = parseFloat(item.dataset.price);
            total += quantity * price;
        });
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    function clearCart() {
        items.forEach(item => {
            item.value = 1; // Reset quantity to 1
        });
        updateTotal(); // Update total after clearing the cart
    }

    items.forEach(item => {
        item.addEventListener('input', updateTotal);
    });

    clearCartBtn.addEventListener('click', clearCart);
});
