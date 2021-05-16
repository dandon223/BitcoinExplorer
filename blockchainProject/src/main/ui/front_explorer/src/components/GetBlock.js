
import React, {useEffect, useState} from "react";
import BlockList from "./BlockList";
import GetBlockHash from "./GetBlockHash";

class GetBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        readHash: "",
        readBlock: "",
    };
  }

  handleHash = (hash) => {
    this.setState({readHash: hash});
  };

  render() {
    return (
      <div>
        <GetBlockHash handleHashProps={this.handleHash}/>
        <BlockList blockByHash = {this.state.readHash} />
      </div>
    );
  }
}

export default GetBlock;

// function GetBlock() {
//     const[readBlock, setreadBlock] = useState(null);

//     useEffect(() => {

//     if(!readBlock){
//         fetch("http://localhost:8080/blockchainProject-1.0-SNAPSHOT/api/getBlock")
//         .then((response) => response.json())
//         .then((data) => {
//           setreadBlock(data);
//         });
//       } 
//     }, [readBlock]);
//     return (
//       <div>
//         {readBlock ? readBlock.map((blockItem, i) => {
//             return (
//                 <div>
//                     <tr key={i}>
//                         <td>{blockItem.nonce}</td>
//                     </tr>
//                 </div>
//             );
//         }) 
//     : "loading data ..."}
//       </div>);
//   }
  
//   export default GetBlock;