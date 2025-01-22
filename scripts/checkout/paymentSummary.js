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

        <div class="payment-summary-title">
          <button class="toggle-shipping-button">Shipping Information</button>
        </div>
        <div id="shipping-info-container" class="hidden">
          <div class="payment-summary-row subtotal-row">
              <div>First Name:</div>
              <div class="payment-summary-money"><input type="text" id="fname" name="fname" required></div>
          </div>
          <div class="payment-summary-row subtotal-row">
              <div>Last Name:</div>
              <div class="payment-summary-money"><input type="text" id="lname" name="lname" required></div>
          </div>
          <div class="payment-summary-row subtotal-row">
              <div>Address:</div>
              <div class="payment-summary-money"><input type="text" id="address" name="address" required></div>
          </div>
          <div class="payment-summary-row subtotal-row">
              <div>City:</div>
              <div class="payment-summary-money"><input type="text" id="city" name="city" required></div>
          </div>
          <div class="payment-summary-row subtotal-row">
              <div>Phone:</div>
              <div class="payment-summary-money"><input type="text" id="phone" name="phone" required></div>
          </div>
        </div>

        <button class="place-order-button button-primary js-place-order">
            Place your order
        </button>
        <div id="paypal-button-container" class="hidden"></div>
    `;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;

  // Toggle Shipping Information Section
  const toggleShippingButton = document.querySelector(
    ".toggle-shipping-button"
  );
  const shippingInfoContainer = document.getElementById(
    "shipping-info-container"
  );

  toggleShippingButton.addEventListener("click", () => {
    shippingInfoContainer.classList.toggle("hidden");
  });

  const placeOrderButton = document.querySelector(".js-place-order");
  placeOrderButton.addEventListener("click", function () {
    document
      .getElementById("paypal-button-container")
      .classList.remove("hidden");
    placeOrderButton.disabled = true;
    renderPayPalButton();
  });

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
          },
        })
        .render("#paypal-button-container");
    }
  }
}
