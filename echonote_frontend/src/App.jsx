import { Component } from "react";

import { getResizeEventListener } from "@services/responsiveFrame/index";

class App extends Component {
  render() {
    return <div id="App"></div>;
  }
  componentDidMount() {
    const FixRatio = getResizeEventListener(2800, 1752);
    window.onresize = FixRatio;
    FixRatio();
  }
}

export default App;
