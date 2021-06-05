import React from "react";
import GetMinerHash from "./GetMinerHash";
import MinerList from './MinerList';

class GetMiner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          readHash: ""
      };
    }
  
    handleHash = (hash) => {
      this.setState({readHash: hash});
    };
  
    render() {
      return (
        <div>
          <GetMinerHash handleHashProps={this.handleHash}/>
          <MinerList minerByHash = {this.state.readHash} />
        </div>
      );
    }
  }
  
  export default GetMiner;