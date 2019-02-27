import React, { Component } from 'react';
import './App.css';

import Modal from './components/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="App">
        <main>
          <section>
            <button onClick={this.toggleModal}>Open Modal</button>
            {this.state.isOpen ? (
              <Modal toggleModal={this.toggleModal} />
            ) : null}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
