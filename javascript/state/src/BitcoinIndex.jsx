import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const BitcoinIndex = () => {
  const [price, setPrice] = useState("");
  const [flash, setFlash] = useState(false);

  const fetchBitcoinPrice = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice/AUD.json")
      .then((res) => res.json())
      .then((data) => {
        setPrice(data.bpi.AUD.rate);
        setFlash(true);
        setTimeout(() => {
          setFlash(false);
        }, 500);
      });
  };

  useEffect(() => {
    fetchBitcoinPrice();

    const socket = new WebSocket("wss://api.coindesk.com/v1/bpi/currentprice/AUD.json");
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(data.bpi.AUD.rate);
      setFlash(true);
      setTimeout(() => {
        setFlash(false);
      }, 500);
    };

    // Automatically fetch Bitcoin price every 10 seconds
    const interval = setInterval(fetchBitcoinPrice, 10000);

    return () => {
      clearInterval(interval);
      socket.close();
    };
  }, []);

  return (
    <>
      <p style={{ color: flash ? "red" : "white" }}>Current Price (AUD): {price}</p>
      <Pokemon />
    </>
  );
};

export default BitcoinIndex;
