import React, { Component } from 'react';
import { render } from 'react-dom';
import Destructuring from './Destructuring'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Destructuring name="Vishvjeet" rollNo={123456} />
         
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
