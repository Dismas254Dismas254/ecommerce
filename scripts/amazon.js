import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let currency = "USD"; // Default to USD
let currencySymbol = "$"; // Default symbol

// Function to generate product list HTML
function generateProductsHTML(productList) {
  return productList
    .map(
      (product) => `
        <div class="product-container" data-product-id="${product.id}">
            <div class="product-image-container">
                <img class="product-image" src="${product.image}" alt="${
        product.name
      }">
            </div>
            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>
            <div class="product-desc">
                ${product.desc}
            </div>
            <div class="product-rating-container">
                <img class="product-rating-stars" src="images/ratings/rating-${
                  product.rating.stars * 10
                }.png" alt="Rating: ${product.rating.stars}">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div>
            <div class="product-price">${currencySymbol}${convertPrice(
        product.priceCents / 100
      ).toFixed(2)}</div>
            <div class="product-quantity-container">
                <select class="js-quantity-selector-${product.id}">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="product-spacer"></div>
            <div class="added-to-cart js-added-tocart-${product.id}">
                <img src="images/icons/checkmark.png" alt="Added to cart"> Added
            </div>
            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
              product.id
            }">
                Add to Cart
            </button>
        </div>
    `
    )
    .join("");
}

// Function to load products into the DOM
function loadProducts() {
  const productsGrid = document.querySelector(".js-products-grid");
  if (productsGrid) {
    productsGrid.innerHTML = generateProductsHTML(products);
    addCartButtonListeners(); // Add listeners for initially loaded products
  } else {
    console.error("Products grid element not found");
  }
}

// Load cart from local storage on page load
function loadCartFromLocalStorage() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart.length = 0; // Clear existing cart items
    cart.push(...JSON.parse(storedCart)); // Load cart items from local storage
  }
  updateCartQuantity();
}

// Update cart quantity display and save cart to local storage
function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const cartQuantityElement = document.querySelector(".js-cart-quantity");
  if (cartQuantityElement) {
    cartQuantityElement.innerHTML = cartQuantity;
  } else {
    console.error("Cart quantity element not found");
  }

  // Save the cart data to local storage
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to add event listeners for "Add to Cart" buttons
function addCartButtonListeners() {
  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      addToCart(productId);

      const addedMessage = document.querySelector(
        `.js-added-tocart-${productId}`
      );

      // Show the "Added to Cart" message
      if (addedMessage) {
        addedMessage.style.opacity = 1;

        // Fade out the message after 1.5 seconds
        setTimeout(() => {
          addedMessage.style.opacity = 0;
        }, 1500);
      }

      updateCartQuantity();
    });
  });
}

// Currency conversion logic
function convertPrice(priceInUSD) {
  const conversionRates = {
    USD: 1,
    CAD: 1.35,
    INR: 75.0,
    GBP: 0.75,
    KES: 0.25,
    // Add more conversion rates as needed
  };

  return priceInUSD * (conversionRates[currency] || 1); // Default to USD if unknown currency
}

// Function to update currency based on user's location
function updateCurrency() {
  fetch("https://ipinfo.io?token=cb762e630b9759")
    .then((response) => response.json())
    .then((data) => {
      const country = data.country;
      const countryCurrencyMap = {
        US: "USD",
        CA: "CAD",
        IN: "INR",
        GB: "GBP",
        KE: "KES",
        // Add more countries and their corresponding currencies
      };
      currency = countryCurrencyMap[country] || "USD"; // Default to USD if unknown
      currencySymbol =
        currency === "USD"
          ? "$"
          : currency === "KES"
          ? "KES"
          : currency === "INR"
          ? "₹"
          : "$";

      // After currency update, regenerate the product list with updated prices
      loadProducts();
    })
    .catch((err) => console.error("Currency Fetch Error: ", err));
}

// Initialize currency and load cart data
document.addEventListener("DOMContentLoaded", () => {
  updateCurrency();
  loadCartFromLocalStorage();
  loadProducts(); // Load products after currency is set
  addCartButtonListeners(); // Add listeners for initially loaded products
});

// Search functionality
document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector(".js-search-bar");
  const searchButton = document.querySelector(".js-search-button");

  // Function to search products and display results
  function searchProducts(keyword) {
    const lowerCaseKeyword = keyword.toLowerCase();
    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseKeyword) ||
        (product.desc &&
          product.desc.toLowerCase().includes(lowerCaseKeyword)) ||
        (product.keywords &&
          product.keywords.some((k) =>
            k.toLowerCase().includes(lowerCaseKeyword)
          )) // Check keywords
    );

    // Regenerate productsHTML based on filtered products
    const productsGrid = document.querySelector(".js-products-grid");
    if (productsGrid) {
      productsGrid.innerHTML = generateProductsHTML(filteredProducts);
      addCartButtonListeners(); // Re-add listeners for newly displayed products
    }
  }

  // Event listener for search input (for "Enter" key or button click)
  searchBar.addEventListener("input", (event) => {
    searchProducts(event.target.value);
  });

  // Optionally, add search on button click
  searchButton.addEventListener("click", () => {
    searchProducts(searchBar.value);
  });
});
