import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import {
  deliveryOptions,
  getDeliveryOption,
} from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {
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

  const paymentSummaryHTML = `
        <div class="payment-summary-title">Order Summary</div>
        <div class="payment-summary-row">
            <div>Items Cost:</div>
            <div class="payment-summary-money">$${formatCurrency(
              productPriceCents
            )}</div>
        </div>
        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$30.00</div>
        </div>
        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(
              totalBeforeTaxCents
            )}</div>
        </div>
        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(
              taxCents
            )}</div>
        </div>
        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(
              totalCents
            )}</div>
        </div>

        <div class="payment-summary-title">Shipping Information</div>
        <button 
          onclick="toggleShippingInfo()" 
          style="background: none; border: none; color: blue; text-decoration: underline; cursor: pointer;font-weight: bold;">
          Add Shipping Information
        </button>
        <div id="shipping-info" style="display: none;">
          <div class="payment-summary-row subtotal-row">
              <div>First Name:</div>
              <div class="payment-summary-money"><input type="text" name="fname" required></div>
          </div>
          <div class="payment-summary-row subtotal-row">
              <div>Last Name:</div>
              <div class="payment-summary-money"><input type="text" name="lname" required></div>
          </div>
          <div class="payment-summary-row subtotal-row">
              <div>Address:</div>
              <div class="payment-summary-money"><input type="text" name="address" required></div>
          </div>
          <div class="payment-summary-row subtotal-row">
              <div>City:</div>
              <div class="payment-summary-money"><input type="text" name="city" required></div>
          </div>
          <div class="payment-summary-row subtotal-row">
    <div>State:</div>
    <div class="payment-summary-money">
        <select name="state" required>
            <option value="" disabled selected>State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
        </select>
    </div>
</div>

          <div class="payment-summary-row subtotal-row">
                <div>Zip Code:</div>
      <div class="payment-summary-money"><input type="text" name="zip" required></div>
  </div>
          </div>
        </div>


        

        <button class="place-order-button button-primary js-place-order">
            Place your order
        </button>
        <div id="paypal-button-container" class="hidden"></div>
    `;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;

  const placeOrderButton = document.querySelector(".js-place-order");
  placeOrderButton.addEventListener("click", function () {
    document
      .getElementById("paypal-button-container")
      .classList.remove("hidden");
    placeOrderButton.disabled = true;
    renderPayPalButton();
  });

  window.toggleShippingInfo = function () {
    const shippingInfoDiv = document.getElementById("shipping-info");
    shippingInfoDiv.style.display =
      shippingInfoDiv.style.display === "none" ? "block" : "none";
  };

  function renderPayPalButton() {
    const paypalButtonContainer = document.getElementById(
      "paypal-button-container"
    );

    if (
      paypal.fundingEligibility &&
      paypal.fundingEligibility[paypal.FUNDING.VENMO]
    ) {
      paypal
        .Buttons({
          fundingSource: paypal.FUNDING.VENMO,
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: (totalCents / 100).toFixed(2),
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              alert(
                "Transaction completed using Venmo by " +
                  details.payer.name.given_name
              );
            });
          },
          onError: function (err) {
            console.error("An error occurred with Venmo:", err);
            alert(
              "An error occurred with Venmo. Please try again or use another payment method."
            );
          },
        })
        .render("#paypal-button-container");
    } else {
      paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: (totalCents / 100).toFixed(2),
                  },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
            });
          },
          onError: function (err) {
            console.error("An error occurred with PayPal:", err);
            alert(
              "An error occurred during the transaction. Please try again."
            );
          },
        })
        .render("#paypal-button-container");
    }
  }
}
