import './App.css';
import {useEffect, useState} from "react";

function App() {
  const[readCoin, setReadCoin] = useState(null);

  useEffect(() => {
    console.log("Done before loading page");

    if(!readCoin){
      fetch("http://localhost:8080/blockchainProject-1.0-SNAPSHOT/api/getMessage")
      .then((response) => response.json())
      .then((data) => {
        console.log("Current bCoin rate: ", data);
        setReadCoin(data);
      });
    }
  }, [readCoin]);
  return (
    <div>
      <div>{JSON.stringify(readCoin).replace(/{|[}]|["]/g, '')}</div>
    </div>);
  //   <div>
  //     {readCoin ? (() => {
  //       return(
  //         <div>
  //         Hellaa
  //         </div>
  //       )
  //     })
  //     : "loading data ... "}
  //     </div>
  // );
}

export default App;
