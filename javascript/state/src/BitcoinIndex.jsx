// Importing necessary modules from React library
import React, { useEffect, useState } from "react";
// Importing the Pokemon component and CurrencySelector component
import Pokemon from "./Pokemon";
import CurrencySelector from "./CurrencySelector";

// BitcoinIndex component, which displays the current Bitcoin price in a selected currency
const BitcoinIndex = () => {
  // State variables for the Bitcoin price ('price') and selected currency ('currency')
  let [price, setPrice] = useState("");
  let [currency, setCurrency] = useState("AUD");

  // useEffect hook to fetch the current Bitcoin price based on the selected currency
  useEffect(() => { 
    // Fetching data from the CoinDesk API with the selected currency
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`) 
      // Parsing the response as JSON
      .then((res) => res.json())
      // Updating the 'price' state with the fetched Bitcoin price
      .then((data) => setPrice(data.bpi[currency].rate));
  }, [currency]);  // useEffect dependency ensures it runs whenever 'currency' changes

  // Render the component with CurrencySelector and displaying the current Bitcoin price
  return (
    <>
      {/* Rendering the CurrencySelector component and passing 'setCurrency' function as a prop */}
      <CurrencySelector setCurrency={setCurrency}/>
      {/* Displaying the current Bitcoin price and selected currency */}
      <p>
        Current Bitcoin Price ({currency}): {price}
      </p>
    </>
  );
};

// Exporting the BitcoinIndex component as the default export
export default BitcoinIndex;
