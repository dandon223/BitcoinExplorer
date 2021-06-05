
import React from "react";
import GetTransactionHash from "./GetTransactionHash";
import TransactionList from "./TransactionList";

class GetTransaction extends React.Component {
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
        <GetTransactionHash handleHashProps={this.handleHash}/>
        <TransactionList transactionByHash = {this.state.readHash} />
      </div>
    );
  }
}

export default GetTransaction;