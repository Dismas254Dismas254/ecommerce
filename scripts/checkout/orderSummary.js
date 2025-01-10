import { cart, removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import {
  deliveryOptions,
  getDeliveryOption,
} from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";

// Function to render the order summary with dynamic currency symbol
export function renderOrderSummary(currencySymbol) {
  let cartSummaryHTML = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);
    const deliveryOptionId = cartItem.deliveryOptionId;
    const deliveryOption = getDeliveryOption(deliveryOptionId);
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

    // Render the order summary with the correct price format
    cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container-${
      matchingProduct.id
    }">
            <div class="delivery-date">
            Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
               <img class="product-image" src="${matchingProduct.image}" />

            <div class="cart-item-details">
                <div class="product-name">
                ${matchingProduct.name}
                </div>
                <div class="product-price">
                ${currencySymbol}${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                <span>
                    Quantity: <span class="quantity-label">${
                      cartItem.quantity
                    }</span>
                </span>
                <span class="update-quantity-link link-primary"></span>
                <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
                  matchingProduct.id
                }">
                    Delete
                </span>
                </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                Choose a delivery option:
                </div>
               ${deliveryOptionsHTML(matchingProduct, cartItem, currencySymbol)}
  
            </div>
            </div>
        </div>
        `;
  });

  // Function to render delivery options for each product with correct price
  function deliveryOptionsHTML(matchingProduct, cartItem, currencySymbol) {
    let html = "";

    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd, MMMM D");
      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : `${currencySymbol}${formatCurrency(deliveryOption.priceCents)}  -`;
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
<div class="delivery-option js-delivery-option" data-product-id="${
        matchingProduct.id
      }" data-delivery-option-id="${deliveryOption.id}">
                <input type="radio"
                ${isChecked ? "checked" : ""}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                <div>
                    <div class="delivery-option-date">
                    ${dateString}
                    </div>
                    <div class="delivery-option-price">
                    ${priceString}
                    </div>
                </div>
                </div>
`;
    });

    return html;
  }

  // Update the order summary HTML in the DOM
  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

  // Event listener for deleting items from the cart
  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();

      // Re-render payment summary after item is removed
      renderPaymentSummary(currencySymbol);
    });
  });

  // Event listener for selecting a delivery option
  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);

      // Re-render both the order summary and payment summary after selection
      renderOrderSummary(currencySymbol);
      renderPaymentSummary(currencySymbol); // added by lardoo
    });
  });
}
