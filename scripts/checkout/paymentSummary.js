import { cart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { deliveryOptions, getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';

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
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
        </div>
        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$30.00</div>
        </div>
        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
        </div>
        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
        </div>
        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
        </div>
        <button class="place-order-button button-primary js-place-order">
            Place your order
        </button>
        <div id="paypal-button-container" class="hidden"></div>
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;

    const placeOrderButton = document.querySelector('.js-place-order');
    placeOrderButton.addEventListener('click', function () {
        // Show PayPal button after the order is ready
        document.getElementById('paypal-button-container').classList.remove('hidden');

        // Disable the Place Order button after it's clicked
        placeOrderButton.disabled = true;

        // Call the PayPal Buttons rendering function
        renderPayPalButton();
    });

    // Function to render the PayPal button
    function renderPayPalButton() {
        paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: (totalCents / 100).toFixed(2) // Dynamically set the value to order total
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Transaction completed by ' + details.payer.name.given_name);
                    // Redirect to a thank you page or update the UI accordingly
                });
            }
        }).render('#paypal-button-container'); // Render the PayPal button
    }
}
