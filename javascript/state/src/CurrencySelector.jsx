// Importing necessary modules from React library
import React, { useEffect, useState } from "react";

// CurrencySelector component receives a prop 'setCurrency' from its parent
const CurrencySelector = ({ setCurrency }) => {
  // State variable 'selectValue' is initialized with the default value "EUR"
  const [selectValue, setSelectValue] = useState("AUD");
  const [currencies, setCurrencies] = useState([]);

  // useEffect hook is used to trigger the 'setCurrency' function when 'selectValue' changes
  useEffect(() => setCurrency(selectValue), [selectValue]);

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/supported-currencies.json")
      .then((res) => res.json())
      .then((data) => setCurrencies(data));
  }, []);

  // Render the component with a dropdown (select) element
  return (
    <select
      // 'onChange' event handler updates 'selectValue' when the user selects a different option
      onChange={(event) => setSelectValue(event.target.value)}
      // 'value' attribute is set to 'selectValue' to control the selected value of the dropdown
      value={selectValue}
    >
      {/* Dropdown options with different currency values */}
        {currencies.map(cur => <option value={cur.currency} key={cur.currency}>{cur.country}</option>)}

    </select>
  );
};

// Exporting the CurrencySelector component as the default export
export default CurrencySelector;
