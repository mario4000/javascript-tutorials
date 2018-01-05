/**
*******************************************
* Data Store: seedData
*******************************************
*/
const appData = window.SeedData.records;
console.log("appData => ", appData);


/**
*******************************************
* App Components
*******************************************
*/

//container
class Page extends React.Component {
  state = {};
  componentDidMount() {
    this.setState({});
  }
  render() {
    return (
      <div>
        <div className='ui'>Page for Site 1</div>
        <MouseWatcher />
      </div>
    );
  }
}

class MouseWatcher extends React.Component {
  state =  { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    const { x, y } = this.state
    return (
      <div className="mouse-watcher"
           onMouseMove={this.handleMouseMove}>
           <h1>The mouse position is (x: {x}, y: {y})</h1>
      </div>
    )
  }
}


ReactDOM.render(
  <Page />,
  document.getElementById('content')
);
