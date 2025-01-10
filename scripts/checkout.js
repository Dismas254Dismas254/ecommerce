import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

async function detectCurrency() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    const countryCode = data.country;

    const countryToCurrency = {
      US: "USD",
      GB: "GBP",
      IN: "INR",
      CA: "CAD",
      KE: "KES",
      // Add more country-to-currency mappings here
    };

    return countryToCurrency[countryCode] || "USD"; // Default to USD if country is not found
  } catch (error) {
    console.error("Error detecting currency:", error);
    return "USD"; // Fallback to USD if an error occurs
  }
}

// This function will render both the order summary and payment summary
async function initializePage() {
  const currency = await detectCurrency();

  // Now, render both the order summary and payment summary
  renderOrderSummary(currency);
  renderPaymentSummary(currency);
}

// Initialize the page with correct currency
initializePage();
