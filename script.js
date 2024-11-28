document.addEventListener("DOMContentLoaded", async () => {
    const productList = document.getElementById("product-list");

    try {
        const response = await fetch("http://localhost:3000/products"); 
        const products = await response.json();

        products.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.className = "product";
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="likeProduct(${product.id})">❤️ Like</button>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productDiv);
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
});

function likeProduct(productId) {
    alert(`You liked product ID: ${productId}`);
}

function addToCart(productId) {
    alert(`Product ID ${productId} added to cart!`);
}
