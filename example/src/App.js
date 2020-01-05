import React, {Component} from 'react';

import ReactJsonShaper from 'react-json-shaper';

export default class App extends Component {
  state = {data: {}};
  async componentDidMount() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    const data = await response.json();
    this.setState({data});
  }
  render() {
    return (
      <div>
        <ReactJsonShaper src={this.state.data} />
      </div>
    );
  }
}
