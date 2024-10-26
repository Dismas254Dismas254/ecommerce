import {cart} from '../../data/cart.js';

import { getProduct } from '../../data/products.js';

import  {deliveryOptions, getDeliveryOption} from  '../../data/deliveryOptions.js';


import { formatCurrency } from '../utils/money.js';




export function renderPaymentSummary(){


    let productPriceCents = 0 ;
    let shippingPriceCents = 30;
    let delivery = 3000;
  

    cart.forEach((cartItem)  => {
    const product =    getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;


    });

    const totalBeforeTaxCents =productPriceCents + delivery;
    const taxCents = totalBeforeTaxCents * 0.1;
    const totatCents = formatCurrency(totalBeforeTaxCents + taxCents);


    const paymentSummaryHTML = `
    
    <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items Cost:</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$30</div>
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
            <div class="payment-summary-money">$${totatCents}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>




    <div id="paypal-button-container" class="hidden"></div>

    `;

    document.querySelector(' .js-payment-summary').innerHTML = paymentSummaryHTML;






    document.querySelector(' .js-payment-summary').addEventListener('click', function() {
      // Show PayPal button after the order is ready
      document.getElementById('paypal-button-container').classList.remove('hidden');
  
      // Optionally, you could also disable the Place Order button after it's clicked
      this.disabled = true;
      
      // Call the PayPal Buttons rendering
      renderPayPalButton();
  });
  
  // Function to render the PayPal button
  function renderPayPalButton() {
      paypal.Buttons({
          createOrder: function(data, actions) {
              return actions.order.create({
                  purchase_units: [{
                      amount: {
                          value: totatCents // Dynamically set this value to your order total
                      }
                  }]
              });
          },
          onApprove: function(data, actions) {
              return actions.order.capture().then(function(details) {
                  alert('Transaction completed by ' + details.payer.name.given_name);
                  // You can redirect to a thank you page or update the UI accordingly
              });
          }
      }).render('#paypal-button-container'); // Render the PayPal button
  }
  






}