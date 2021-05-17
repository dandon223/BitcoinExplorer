import React, {useEffect, useState} from 'react';

// class BlockList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             readBlock: null,
//         };
//     }


//     render() {
//         this.readBlock();
//         return (
//             <div>
//             {this.state.readBlock ? this.state.readBlock.map((blockItem, i) => {
//                 return (
//                     <div>
//                         <tr key={i}>
//                             <td>{blockItem.nonce}</td>
//                         </tr>
//                     </div>
//                 );
//             }) 
//         : null}
//             </div>);
//     }
    


//     readBlock = () => {
//         if(!this.state.readBlock){
//                 fetch("http://localhost:8080/blockchainProject-2.0-SNAPSHOT/api/getBlock?hash=" + this.props.blockByHash)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     this.setState({readBlock: data});
//                 });
//             } 
//         }

// function BlockList(props) {
//     return 
//     <li>{props.blockByHash}</li>
// }
// }

function BlockList(props) {
    const[readBlock, setreadBlock] = useState(null);

    useEffect(() => {
        if(props.blockByHash != ""){

            if(!readBlock){
                fetch("http://localhost:8080/blockchainProject-2.0-SNAPSHOT/api/getBlock?hash=" + props.blockByHash)
                .then((response) => response.json())
                .then((data) => {
                setreadBlock(data);
                });
            } 
        }
    }, [props.blockByHash]);

    return (
      <div>
        <div>{JSON.stringify(readBlock)}</div>
        {/* <div>{props.blockByHash}</div> */}
      </div>);
  }
export default BlockList;