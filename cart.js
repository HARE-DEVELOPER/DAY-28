// cart.js

// Sample JSON data
const jsonData = [
    {
        "id": "1",
        "title": "Smartphone",
        "price": "299.99",
        "image": "https://example.com/smartphone.jpg"
    },
    {
        "id": "2",
        "title": "Laptop",
        "price": "799.99",
        "image": "https://example.com/laptop.jpg"
    }
];

function renderCart(items) {
    const container = document.getElementById('cart-container');
    let total = 0;

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div>
                <h3>${item.title}</h3>
                <p>$${item.price}</p>
            </div>
        `;
        
        container.appendChild(itemDiv);
        total += parseFloat(item.price);
    });

    document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
}

// Call renderCart with the JSON data
renderCart(jsonData);
