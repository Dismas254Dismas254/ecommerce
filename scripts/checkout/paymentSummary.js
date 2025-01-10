import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import {
  deliveryOptions,
  getDeliveryOption,
} from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";

// This function will render the payment summary dynamically based on the selected currency
export async function renderPaymentSummary(currency) {
  let productPriceCents = 0;
  let shippingPriceCents = 30;
  let delivery = 3000;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTaxCents = productPriceCents + delivery;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  // Get the currency symbol for display
  const currencySymbol = new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  })
    .formatToParts(0)
    .find((part) => part.type === "currency").value;

  const paymentSummaryHTML = `
        <div class="payment-summary-title">Order Summary</div>
        <div class="payment-summary-row">
            <div>Items Cost:</div>
            <div class="payment-summary-money">${currencySymbol}${formatCurrency(
    productPriceCents
  )}</div>
        </div>
        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">${currencySymbol}${formatCurrency(
    30
  )}</div>
        </div>
        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">${currencySymbol}${formatCurrency(
    totalBeforeTaxCents
  )}</div>
        </div>
        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">${currencySymbol}${formatCurrency(
    taxCents
  )}</div>
        </div>
        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">${currencySymbol}${formatCurrency(
    totalCents
  )}</div>
        </div>

        <button class="place-order-button button-primary js-place-order">
            Place your order
        </button>
        <div id="paypal-button-container" class="hidden"></div>
    `;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;

  const placeOrderButton = document.querySelector(".js-place-order");
  placeOrderButton.addEventListener("click", function () {
    // Show PayPal button after the order is ready
    document
      .getElementById("paypal-button-container")
      .classList.remove("hidden");

    // Disable the Place Order button after it's clicked
    placeOrderButton.disabled = true;

    // Call the PayPal Buttons rendering function
    renderPayPalButton(currency, totalCents);
  });

  // Render PayPal button
  function renderPayPalButton(currency, totalCents) {
    paypal
      .Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: (totalCents / 100).toFixed(2), // Dynamically set the value to order total
                  currency_code: currency,
                },
              },
            ],
          });
        },
        onApprove: function (data, actions) {
          return actions.order.capture().then(function (details) {
            alert("Transaction completed by " + details.payer.name.given_name);
            // Handle order completion (e.g., redirect to thank-you page)
          });
        },
        onError: function (err) {
          console.error("An error occurred with PayPal:", err);
          alert("An error occurred during the transaction. Please try again.");
        },
      })
      .render("#paypal-button-container");
  }
}
