import { Component } from "react";
import GlobalStyles from "@shared/styles/GlobalStyles";
import { getResizeEventListener } from "@services/responsiveFrame/index";

class App extends Component {
  render() {
    return (
      <div id="App">
        <GlobalStyles />
        <p>안녕하세요~</p>
      </div>
    );
  }
  componentDidMount() {
    const FixRatio = getResizeEventListener(1280, 800);
    window.onresize = FixRatio;
    FixRatio();
  }
}

export default App;
