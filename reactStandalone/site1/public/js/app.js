class ParentComponent extends React.Component {
  state = {};
  componentDidMount() {
    this.setState({});
  }
  render() {
    return (
      <div className='ui'>Parent</div>
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
  <ParentComponent />,
  document.getElementById('content')
);
