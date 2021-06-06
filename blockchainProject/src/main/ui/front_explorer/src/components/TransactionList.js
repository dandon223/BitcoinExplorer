import React, {useEffect, useState} from 'react';
import "./StyledList.css"
function TransactionList(props) {
    const[readBlock, setreadBlock] = useState("");
    const[inputs , setInputs] = useState();
    const[outputs, setOutputs] = useState();

    useEffect(() => {
        if(props.transactionByHash !== ""){
                fetch("http://192.168.194.200:8082/myapp/api/getTransaction?hash=" + props.transactionByHash)
                .then((response) => response.json())
                .then((data) => {
                setreadBlock(data[0]);
                setInputs(data[0]["inputs"]);
                setOutputs(data[0]["out"]);
                console.log(inputs);
                console.log(data);
                });
        }
    }, [props.transactionByHash]);
    if(readBlock !== "" ){
        try {
            if(readBlock.error){
                return(
                <div>
                    <p>Niestety nie znaleziono takiej transakcji.</p>
                </div>
                );
            };
        } catch (error) {}
    }
    if(readBlock !== "" && inputs !=null && outputs !=null){
    return (
        <div>
          <div>
            <h4>inputs</h4>
                <div>
                  {inputs.map((transaction, i) => {
                    if(transaction["prev_out"] != null){
                      return (
                        <ul class="styled-list">
                          <li key={i}>
                            <div>
                              <div> Transaction value: {transaction["prev_out"].value} </div>
                            </div>
                            <div>
                              <div>Address: {transaction["prev_out"].addr}</div>
                            </div>
                          </li> 
                        </ul>
                        );
                    }
                    })
                  }
                </div>
                <hr/>
          </div>
            
            <div>
                <h4>outputs</h4>
                <div>
                  {outputs.map((transaction, i) => {
                    return (
                      <ul class="styled-list">
                      <li key={i}>
                        <div> Transaction value: {transaction.value} </div>
                        <div>Address: {transaction.addr}</div>
                      </li> 
                      </ul>
                      );
                    })
                  }
                </div>
          </div>

        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
export default TransactionList;