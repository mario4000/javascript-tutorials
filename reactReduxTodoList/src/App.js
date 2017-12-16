/**
* Update Type:
* ============
* create global state within index.js;
* render ui with global state
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    const { todos } = this.props;
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
                  { todos.map( todo => (
                    <li key={ todo.id }>
                      <input type="checkbox"
                             defaultChecked={ todo.isComplete }/>
                      { todo.name }
                    </li>
                  ))}
                </ul>
            </div>

        </div>

      </div>
    );
  }
}

export default App;
