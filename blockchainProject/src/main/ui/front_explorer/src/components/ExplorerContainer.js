import React from "react"
import Tabs from "./Tabs";
import Header from "./Header";

import ExchangeRate from "./ExchangeRate"; 
import GetBlock from "./GetBlock";
import GetMiner from "./GetMiner";
import GetTransaction from "./GetTransaction";
import PriceChart from "./PriceChart";
class ExplorerContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header/>
          <Tabs> 
          <div label="Wykres Cen"> 
            <ExchangeRate/>
            <PriceChart/>
          </div> 
          <div label="Szukany blok"> 
            <GetBlock/>
          </div> 
          <div label="Szukany kopacz"> 
            <GetMiner/>
          </div>
          <div label="Szukana transakcja">
            <GetTransaction/>
          </div>
          </Tabs> 
        </div>
      </div>
    )
  }
}
export default ExplorerContainer