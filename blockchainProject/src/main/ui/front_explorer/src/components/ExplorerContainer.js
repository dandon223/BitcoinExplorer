import React from "react"
import Tabs from "./Tabs";
import ExchangeRate from "./ExchangeRate"; 
import GetBlock from "./GetBlock";
import GetBlockHash from "./GetBlockHash";
import Header from "./Header";
import GetTransaction from "./GetTransaction";
class ExplorerContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header/>
          <Tabs> 
          <div label="Wykres Cen"> 
            <ExchangeRate/>
          </div> 
          <div label="Szukany blok"> 
            <GetBlock/>
          </div> 
          <div label="Szukany kopacz"> 
            Work in progress
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