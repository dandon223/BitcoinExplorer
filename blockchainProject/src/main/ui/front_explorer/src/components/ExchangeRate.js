import {useEffect, useState} from "react";

import "./StyledRate.css"

function ExchangeRate() {
    const[readCoin, setReadCoin] = useState("");

    useEffect(() => {

    if(!readCoin){
        fetch("http://192.168.194.200:8082/myapp/api/getMessage")
        .then((response) => response.json())
        .then((data) => {
          console.log("Current bCoin rate: ", data);
          setReadCoin(data);
        });
      } 
    }, [readCoin]);

    if(readCoin["usd"] != ""){
      return (
        <div class="styled-rate">
          <h2>Current price of Bitcoin</h2>
          <h3>{readCoin["usd"]} BTC</h3>
          <h4>Last update: {readCoin["time"]}</h4>
        </div>);

    } else if(readCoin["BTC/USD"] != ""){
      return (
        <div>
          <h2>Current price of Bitcoin</h2>
          <h3>{readCoin["BTC/USD"]} BTC</h3>
          <h4>Last update: Now</h4>
        </div>);

    } else {
      return (
        <div></div>
      );
    }
  }
  export default ExchangeRate;
  