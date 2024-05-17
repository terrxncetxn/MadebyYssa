let cart = [];

function addToCart(productName, productImage, price) {
    const cartItems = document.getElementById('cart-items');
    const colorSelect = document.getElementById('color-select');
    const color = colorSelect.value; // Get the selected color from the dropdown

    const product = { name: productName, image: productImage, price: price, color: color };

    cart.push(product);
    updateCartDisplay();
}
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear current cart items

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.image}" width="50" height="50" alt="${item.name}">
            ${item.name} - P${item.price.toFixed(2)}
            Color: ${item.color}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
    });
}
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function checkout() {
    // Check if the user is registered
    if (registeredUsername === "") {
        alert("Please register before checking out.");
        return; // Stop the checkout process
    }

    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price;
        });
        alert(`Total price: P${totalPrice.toFixed(2)}\nThank you for your purchase, ${registeredUsername}!`);
        cart = [];
        updateCartDisplay();
    }
}
// Function to open the modal
function openModal() {
  document.getElementById("modal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get username from the form
    const username = document.getElementById("username").value;

    // Update the username display
    document.getElementById("usernameDisplay").textContent = "Welcome, " + username + "!";

    // Close the modal
    closeModal();
});
let registeredUsername = "";
// Function to handle registration form submission
document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get username from the form
    registeredUsername = document.getElementById("username").value;

    // Update the username display
    document.getElementById("usernameDisplay").textContent = "Welcome, " + registeredUsername + "!";

    // Update the cart heading
    document.getElementById("cart-heading").textContent = registeredUsername + "'s Shopping Cart";

    // Close the modal
    closeModal();
});
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
}
function checkout() {
    if (registeredUsername === "") {
        alert("Please register before checking out.");
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        let totalPrice = 0;
        let receiptContent = `Receipt for ${registeredUsername}:\n\n`;

        cart.forEach(item => {
            receiptContent += `${item.name} - Color: ${item.color}, Price: P${item.price.toFixed(2)}\n`;
            totalPrice += item.price;
        });

        receiptContent += `\nTotal price: P${totalPrice.toFixed(2)}\n\nThank you for your purchase, ${registeredUsername}!`;

        alert(receiptContent);

        cart = [];
        updateCartDisplay();
    }
}
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    const yOffset = -80; // Adjust as needed
    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}