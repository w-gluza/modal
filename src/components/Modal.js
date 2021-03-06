import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shapes: ['circle', 'square', 'triangle', 'rectangle'],
      colors: ['#b2dfdb', '#ffe0b2', '#f8bbd0', '#dcedc8'],
      shape: 'circle',
      fill: '#b2dfdb'
    };
  }

  componentDidMount() {
    const c = document.getElementById('myCanvas');
    const ctx = c.getContext('2d');
    const centerX = c.width / 2;
    const centerY = c.height / 2;
    const radius = 70;
    let fill = this.state.fill;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = fill;
    ctx.fill();
  }

  componentDidUpdate() {
    const c = document.getElementById('myCanvas');
    const ctx = c.getContext('2d');
    const centerX = c.width / 2;
    const centerY = c.height / 2;
    const radius = 70;
    let shape = this.state.shape;
    let fill = this.state.fill;

    if (shape === 'circle') {
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = fill;
      ctx.fill();
    } else if (shape === 'square') {
      ctx.clearRect(0, 0, c.width, c.height);

      ctx.beginPath();
      ctx.rect(centerX - 200 / 2, centerY - 200 / 2, 200, 200);
      ctx.fillStyle = fill;
      ctx.fill();
    } else if (shape === 'rectangle') {
      ctx.clearRect(0, 0, c.width, c.height);

      ctx.beginPath();
      ctx.rect(centerX - 200 / 2, centerY - 100 / 2, 200, 100);
      ctx.fillStyle = fill;
      ctx.fill();
    } else if (shape === 'triangle') {
      ctx.clearRect(0, 0, c.width, c.height);

      ctx.fillStyle = fill;
      ctx.lineWidth = 2;
      ctx.beginPath();

      ctx.moveTo(100, 100);
      ctx.lineTo(300, 100);
      ctx.lineTo(100, 300);
      ctx.lineTo(100, 100);

      ctx.fill();
      ctx.closePath();
    } else if (shape === '' && fill === '') {
      ctx.clearRect(0, 0, c.width, c.height);
    }
  }

  // handleClose = event =>
  //   document.getElementById('myModal').classList.remove('show');

  handleClose() {
    document.getElementById('myModal').classList.remove('show');
    document.getElementById('confirmWraper').classList.add('hide');
    document.getElementById('modalContent').classList.remove('hide');
  }
  handleConfirmation() {
    document.getElementById('modalContent').classList.add('hide');
    document.getElementById('confirmWraper').classList.remove('hide');
  }

  render() {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content-wrapper">
          <div id="confirmWraper" className="hide">
            <button
              className="button confirm-button"
              onClick={this.handleClose}
            >
              Confirm
            </button>
          </div>
          <div id="modalContent" className="modal-content">
            <div className="modal-header">
              <h2 style={{ color: this.state.fill }}>
                Modal Header: <span>{this.state.shape}</span>
              </h2>
              <button className="closeButton" onClick={this.handleClose}>
                &times;
              </button>
            </div>
            <div className="shape-list">
              {this.state.shapes.map((shape, id) => (
                <button
                  className="list-item"
                  key={id}
                  onClick={() => this.setState({ shape: shape })}
                >
                  {shape}
                </button>
              ))}
            </div>

            <div>
              <canvas
                id="myCanvas"
                className="shape-container"
                width="300px"
                height="300px"
              />
            </div>

            <div className="color-list">
              {this.state.colors.map((color, id) => (
                <button
                  key={id}
                  className="dot"
                  onClick={() => this.setState({ fill: color })}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <footer className="footer">
              <button
                className="button button__modified"
                onClick={this.handleClose}
              >
                Skip
              </button>
              <button className="button" onClick={this.handleConfirmation}>
                Next
              </button>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
