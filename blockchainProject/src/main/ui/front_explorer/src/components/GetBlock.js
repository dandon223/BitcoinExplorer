
import React from "react";
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