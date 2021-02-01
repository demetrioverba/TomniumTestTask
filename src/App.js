import React, { Component } from 'react';
import RenderLoader from './components/RenderLoader';
import LoadData from './LoadData';
import RenderList from './components/RenderList';
import './App.css';

class App extends Component {
  state = {
    loaderFlag: true,
  }

  componentDidMount() {
    LoadData().then(data => this.setState({ loaderFlag: false, loadedData: data }))
  }

  render() {

    let loader;
    let renderList;
    if (this.state.loaderFlag) {
      loader = < RenderLoader />;
    };
    if (this.state.loadedData) {
      renderList = <RenderList data={this.state.loadedData} />
    }

    return (
      <div>
        <div>
          <h3>Data from local JSON file</h3>
          {loader}
          {renderList}
        </div>
      </div>
    );
  }
}

export default App;