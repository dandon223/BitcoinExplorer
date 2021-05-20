import {useEffect, useState} from "react";
// import {FontAwesome} from "react-icons/fa";

import {FaSearchDollar} from "react-icons/fa"
import { IconContext } from 'react-icons/lib';



function ExchangeRate() {
    const[readCoin, setReadCoin] = useState(null);

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
    return (
      <div>
        <IconContext.Provider value={{ style: {fontSize: '60px', color: "rgb(0, 123, 255)"}}}>
        <div><FaSearchDollar /> {JSON.stringify(readCoin).replace(/{|[}]|["]/g, '')}</div>
        </IconContext.Provider>
        
        
      </div>);
  }
  
  export default ExchangeRate;
  