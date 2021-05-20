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
    const[readBlock, setreadBlock] = useState({
      Block: ""
    });

    const [blockTrans, setBlockTrans] = useState([])


    useEffect(() => {
        if(props.blockByHash != ""){
                fetch("http://localhost:8080/blockchainProject-2.0-SNAPSHOT/api/getBlock?hash=" + props.blockByHash)
                .then((response) => response.json())
                .then((data) => {
                setreadBlock(data[0]);
                setBlockTrans(data[0].tx);
                console.log(data);
                });

        }
    }, [props.blockByHash]);

    return (
      <>
        <div>
          <table border="2">
            <tbody>
                <tr>
                  <td>Block index</td>
                  <td>{readBlock.block_index}</td>
                </tr>
                <tr>
                  <td>Timestamp</td>
                  {/* <td>{readBlock.height}</td> */}
                </tr>
                <tr>
                  <td>Number of transactions</td>
                  <td>{readBlock.n_tx}</td>
                </tr>
                <tr>
                  <td>Bits</td>
                  <td>{readBlock.bits}</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>{readBlock.weight}</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>{readBlock.size}</td>
                </tr>
                <tr>
                  <td>next block</td>
                  <td>{readBlock.next_block[0]}</td>
                </tr>
                <tr>
                  <td>prev block</td>
                  <td>{readBlock.prev_block}</td>
                </tr>
                {/* <tr>
                  <td>{blockTrans[0]}</td>
                </tr> */}
            </tbody>
          </table>
        </div>
      </>
    );
  }
export default BlockList;