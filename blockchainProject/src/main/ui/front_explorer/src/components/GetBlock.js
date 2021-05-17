
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
// 0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103
// db654f683af4c5e7d00567c9e656bdc53e25c445b57f115808f2e170242d9cdd
// 6f5d841d9d4c959384da4d1e9c23cc1e27b9bd319abe0363dde8cb78fcc53f3a
// a47f54f40c487e307dd8666d5aead263938017dff683b5ab3bf94dc2a5e55d05