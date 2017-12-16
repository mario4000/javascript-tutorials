/**
* Update Type:
* ============
* adding static ui components and initial styles.
* preview page then decide how to break up components
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}
               className="App-logo"
               alt="logo" />
          <h1 className="App-title">
            Welcome to React and Redux
          </h1>
        </header>

        <div className="Todo-App">

            <form>
              <input type="text" />
            </form>

            <div className="Todo-List">
                <ul>
                    <li>
                      <input type="checkbox" />
                      Create Static UI
                    </li>
                    <li>
                      <input type="checkbox" />
                      Create Initial State
                    </li>
                    <li>
                      <input type="checkbox" />
                      Bind State to Render UI
                    </li>
                </ul>
            </div>

        </div>

      </div>
    );
  }
}

export default App;
