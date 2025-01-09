import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let productsHTML = "";

// Function to generate product list HTML
function generateProductsHTML(productList) {
  return productList
    .map(
      (product) => `
        <div class="product-container" data-product-id="${product.id}">
            <div class="product-carousel">
                <div class="carousel-images js-carousel-images-${product.id}">
                    ${product.images
                      .map(
                        (image) => `
                        <img class="product-image" src="${image}" alt="${product.name}">
                    `
                      )
                      .join("")}
                </div>
                <div class="carousel-dots js-carousel-dots-${product.id}">
                    ${product.images
                      .map(
                        (_, index) => `
                        <div class="dot ${
                          index === 0 ? "active" : ""
                        }" data-index="${index}"></div>
                    `
                      )
                      .join("")}
                </div>
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
            <div class="product-price">$${(product.priceCents / 100).toFixed(
              2
            )}</div>
            <div class="product-quantity-container">
                <select class="js-quantity-selector-${product.id}">
                    ${[...Array(10)]
                      .map(
                        (_, i) => `
                        <option value="${i + 1}" ${i === 0 ? "selected" : ""}>${
                          i + 1
                        }</option>
                    `
                      )
                      .join("")}
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

function initializeCarousels() {
  products.forEach((product) => {
    const imagesContainer = document.querySelector(
      `.js-carousel-images-${product.id}`
    );
    const dots = document.querySelectorAll(
      `.js-carousel-dots-${product.id} .dot`
    );

    let currentIndex = 0;

    const updateCarousel = (index) => {
      currentIndex = index;
      imagesContainer.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    };

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => updateCarousel(index));
    });

    // Optional: Swipe functionality for mobile
    let startX = 0;
    imagesContainer.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    imagesContainer.addEventListener("touchend", (e) => {
      const endX = e.changedTouches[0].clientX;
      if (endX - startX > 50 && currentIndex > 0) {
        updateCarousel(currentIndex - 1); // Swipe left
      } else if (
        startX - endX > 50 &&
        currentIndex < product.images.length - 1
      ) {
        updateCarousel(currentIndex + 1); // Swipe right
      }
    });
  });
}

// Display all products on page load
document.querySelector(".js-products-grid").innerHTML =
  generateProductsHTML(products);
initializeCarousels();

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

  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;

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
      addedMessage.style.opacity = 1;

      // Fade out the message after 1.5 seconds
      setTimeout(() => {
        addedMessage.style.opacity = 0;
      }, 1500);

      updateCartQuantity();
    });
  });
}

// Call the load function on page load
loadCartFromLocalStorage();
addCartButtonListeners(); // Add listeners for initially loaded products

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
    document.querySelector(".js-products-grid").innerHTML =
      generateProductsHTML(filteredProducts);
    addCartButtonListeners(); // Re-add listeners for newly displayed products
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
