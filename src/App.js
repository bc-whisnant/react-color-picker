import React, { Component } from 'react';
import './App.css';
import LargeSwatch from './components/LargeSwatch';
import ColorPicker from './components/ColorPicker';

class App extends Component {
  state = {
    backgroundColor: '',
  };

  changeBackgroundColor = (e) => {
    let target = e.target.classList[0];

    switch (target) {
      default:
        this.setState({
          backgroundColor: 'black',
        });
        break;
      case 'red':
        this.setState({
          backgroundColor: 'red',
        });
        break;
      case 'green':
        this.setState({
          backgroundColor: '#26FF03',
        });
        break;
      case 'blue':
        this.setState({
          backgroundColor: '#40B3FE',
        });
        break;
      case 'orange':
        this.setState({
          backgroundColor: '#F9AE03',
        });
        break;
      case 'pink':
        this.setState({
          backgroundColor: '#FA00FF',
        });
        break;
      case 'purple':
        this.setState({
          backgroundColor: 'purple',
        });
        break;
    }
  };

  reset = () => {
    this.setState({
      backgroundColor: 'black'
    })

  }
  render() {
    let style = {
      backgroundColor: this.state.backgroundColor,
    };

    let buttonStyle = {
      border: 'none',
      borderRadius: '8%',
      padding: '10px',
      backgroundColor: this.state.backgroundColor,
      color: 'white'
    }

    let classNames = ['red', 'green', 'blue', 'orange', 'pink', 'purple'];
    return (
      <div className='App'>
        <LargeSwatch style={style} />
        <br />
        <div className='button-container'>
          {classNames.map((item) => (
            <ColorPicker
              colorPickerClass={item}
              changeBackgroundColor={this.changeBackgroundColor}
            />
          ))}
        </div>
        <br/>
        { this.state.backgroundColor !== '' ? 
        <button onClick={this.reset} style={buttonStyle}>Reset</button> :
        null
        }
        
      </div>
    );
  }
}

export default App;
