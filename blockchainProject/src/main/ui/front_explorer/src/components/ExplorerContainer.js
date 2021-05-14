import React from "react"
import Tabs from "./Tabs";
import ExchangeRate from "./ExchangeRate"; 

class ExplorerContainer extends React.Component {
  render() {
    return (
      <div>
      <h1>Blockchain Explorer</h1>
     <Tabs> 
       <div label="Wykres Cen"> 
         <ExchangeRate/>
       </div> 
       <div label="Szukany blok"> 
        Work in progress
       </div> 
       <div label="Szukany kopacz"> 
        Work in progress
       </div>
       <div label="Szukana transakcja">
        Work in progress  
       </div>
     </Tabs> 
    </div>
    )
  }
}
export default ExplorerContainer