import React, { Component } from 'react';
import Data from './data.json';
import RenderItem from './components/RenderItem'
import RenderLoader from './components/RenderLoader'
import './App.css';

class App extends Component {
  state = {
    loaderFlag: true,
    dataX: {}
  }

  renData = () => {
    this.setState({ loaderFlag: false });
    console.log("renData works");
    console.log(this.state.loaderFlag)
  }

  timer = () => { setTimeout(this.renData, 2000); }

  render() {
    let loader;
    let dataY;
    if (this.state.loaderFlag) {
      loader = < RenderLoader />;
      this.timer();
      console.log("Rabotaet")
    } else {
      dataY = Object.keys(Data.rates).map((item, i) => (
        <RenderItem key={i} rate={item} cost={Data.rates[item]} />
      ))
    }
    return (
      <div>
        <div>
          <h3>Data from local JSON file</h3>
          {loader}
          {dataY}
        </div>
      </div>
    );
  }
}

export default App;