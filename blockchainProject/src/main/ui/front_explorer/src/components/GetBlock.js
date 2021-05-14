
import {useEffect, useState} from "react";


function GetBlock() {
    const[readBlock, setreadBlock] = useState(null);

    useEffect(() => {

    if(!readBlock){
        fetch("http://localhost:8080/blockchainProject-1.0-SNAPSHOT/api/getBlock")
        .then((response) => response.json())
        .then((data) => {
          setreadBlock(data);
        });
      } 
    }, [readBlock]);
    return (
      <div>
        {readBlock ? readBlock.map((blockItem, i) => {
            return (
                <div>
                    <tr key={i}>
                        <td>{blockItem.nonce}</td>
                    </tr>
                </div>
            );
        }) 
    : "loading data ..."}
      </div>);
  }
  
  export default GetBlock;