import React from 'react';

class GetBlockHash extends React.Component {
    constructor(props) {
      super(props);
      this.state = { blockHash: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        this.props.handleHashProps(this.state.blockHash);
    }
    myChangeHandler = (event) => {
      this.setState({blockHash: event.target.value});
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <p>Podaj hash szukanego bloku i zatwierdź</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        <input
          type='submit'
          value='zatwierdź'
        />
        </form>
      );
    }
  }

  export default GetBlockHash;
  