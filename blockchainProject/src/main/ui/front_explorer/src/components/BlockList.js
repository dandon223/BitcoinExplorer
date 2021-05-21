import React, {useEffect, useState} from 'react';

function BlockList(props) {
    const[readBlock, setreadBlock] = useState("");

    const [blockTrans, setBlockTrans] = useState([])

    useEffect(() => {
        if(props.blockByHash != ""){
                fetch("http://192.168.194.200:8082/myapp/api/getBlock?hash=" + props.blockByHash)
                .then((response) => response.json())
                .then((data) => {
                setreadBlock(data[0]);
                setBlockTrans(data[0].tx);
                console.log(data);
                });
        }
    }, [props.blockByHash]);

    if(readBlock != ""){
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
                    <td>{new Date(readBlock.time*1000).toLocaleDateString("en-GB")}</td>
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
              </tbody>
            </table>
          </div>
          <div>
                Transactions
                <div>
                  {blockTrans.map((transaction, i) => {
                    return (
                      <div key={i}>
                        <div>
                          <h5> Transaction hash: {transaction.hash} </h5>
                        </div>
                        <div>
                          <h5>Transaction fee: {transaction.fee}</h5>
                        </div>
                        {transaction.out.map(function(output, i){
                          return <div key={i}>
                            <span>Output address:  {output.addr}</span>
                            <span>Output value:  {output.value}</span>
                            </div>
                        })}
                      </div> 
                      );
                    })
                  }
                </div>
          </div>
        </>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
export default BlockList;