import React, {useEffect, useState} from 'react';
import "./StyledList.css"

function MinerList(props) {
    const[readMiner, setReadMiner] = useState();
    const[readTransactions , setTransactions] = useState();
    const DIVIDER = 100000000;

    useEffect(() => {
        if(props.minerByHash != ""){
                fetch("http://192.168.194.200:8082/myapp/api/getAddress?hash=" + props.minerByHash)
                .then((response) => response.json())
                .then((data) => {
                setReadMiner(data[0]);
                setTransactions(data[0]["txs"]);
                console.log(readTransactions);
                console.log(data);
                });
        }
    }, [props.minerByHash]);
    if(readMiner != null ){
        try {
            if(readMiner.error){
                return(
                <div>
                    <p>Niestety nie znaleziono takiego kopacza.</p>
                </div>
                );
            };
        } catch (error) {}
    }
    if(readMiner != "" && readTransactions !=null){
    return (
        <>
        <div>
            <table class="styled-table">
                <tbody>
                    <tr>
                        <td>Transactions</td>
                        <td>{readMiner.n_tx}</td>
                    </tr>
                    <tr>
                        <td>Total received</td>
                        <td>{readMiner.total_received/DIVIDER} BTC</td>
                    </tr>
                    <tr>
                        <td>Total sent</td>
                        <td>{readMiner.total_sent/DIVIDER} BTC</td>
                    </tr>
                    <tr>
                        <td>Final balance</td>
                        <td>{readMiner.final_balance/DIVIDER} BTC</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <ul class="styled-list">
              {readTransactions.map((transaction, index) => (
                  <li key={index}>
                    <h4>Transaction attributes</h4>
                    <div>Hash: {transaction.hash}</div>
                    <div>Fee: {transaction.fee/DIVIDER} BTC</div>
                    {transaction.inputs.map((input, sec_index) => {
                      if(input["prev_out"] != null){
                        return(
                        <li key={sec_index}>
                          <h4>Transaction input: {sec_index + 1}</h4>
                          <div>Address: {input["prev_out"].addr}</div>
                          <div>Value: {input["prev_out"].value/DIVIDER} BTC</div>
                        </li>);
                      }
                      
                    })}
                    {transaction.out.map((output, sec_index) => (
                      <li key={sec_index}>
                        <h4>Transaction output: {sec_index + 1}</h4>
                        <div>Address: {output.addr}</div>
                        <div>Value: {output.value/DIVIDER} BTC</div>
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
export default MinerList;