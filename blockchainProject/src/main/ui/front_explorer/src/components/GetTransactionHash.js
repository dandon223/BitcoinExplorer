import React from 'react';

class GetTransactionHash extends React.Component {
    constructor(props) {
      super(props);
      this.state = { blockHash: "" };
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.blockHash) {
          this.props.handleHashProps(this.state.blockHash);
        } else {
          alert("Proszę podać hash bloku")
        }
    }

    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit} className="hash-container">
          <p>Podaj hash szukanej transakcji i zatwierdź</p>
          <input
            type='text'
            className="hash-input"
            placeholder='Wpisz hash tutaj'
            value={this.state.blockHash}
            name='blockHash'
            onChange={this.onChange}
          />
          <button className="hash-submit">Zatwierdź</button>
        </form>
      )
    }
  }

  export default GetTransactionHash;
  