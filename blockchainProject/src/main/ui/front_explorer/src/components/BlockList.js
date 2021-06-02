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
            <ul>
              {blockTrans.map((transaction, index) => (
                  <li key={index}>
                    <h4>Transaction attributes</h4>
                    <div>Hash: {transaction.hash}</div>
                    <div>Fee: {transaction.fee}</div>
                    {transaction.out.map((output, sec_index) => (
                      <li key={sec_index}>
                        <h4>Transaction output: {sec_index + 1}</h4>
                        <div>Address: {output.addr}</div>
                        <div>Value: {output.value}</div>
                      </li>
                    ))}
                  </li>
                ))}
            </ul>
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