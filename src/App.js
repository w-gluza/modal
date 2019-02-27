import React, { Component } from 'react';
import './App.css';

import Modal from './components/Modal';

class App extends Component {
  handleClick = event =>
    document.getElementById('myModal').classList.add('show');

  render() {
    return (
      <main className="main">
        <button class="button" onClick={this.handleClick}>
          Open Modal
        </button>
        <Modal />
      </main>
    );
  }
}

export default App;
