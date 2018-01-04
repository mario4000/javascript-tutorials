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
      <div className='ui'>Page</div>
    );
  }
}

class ChildComponent extends React.Component {
  render() {
    return (
      <div className=''>Child</div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('content')
);
