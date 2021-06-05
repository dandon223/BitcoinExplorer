import React, {useEffect, useState} from 'react';

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
                inputs
                <div>
                  {inputs.map((transaction, i) => {
                    return (
                      <div key={i}>
                        <div>
                          <h5> Transaction value: {transaction["prev_out"].value} </h5>
                        </div>
                        <div>
                          <h5>Address: {transaction["prev_out"].addr}</h5>
                        </div>
                      </div> 
                      );
                    })
                  }
                </div>
                <hr/>
          </div>
            
            <div>
                outputs
                <div>
                  {outputs.map((transaction, i) => {
                    return (
                      <div key={i}>
                        <div>
                          <h5> Transaction value: {transaction.value} </h5>
                        </div>
                        <div>
                          <h5>Address: {transaction.addr}</h5>
                        </div>
                      </div> 
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