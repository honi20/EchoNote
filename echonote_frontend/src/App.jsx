import { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@shared/styles/GlobalStyles";
import { theme } from "@shared/styles/theme";
import { getResizeEventListener } from "@services/responsiveFrame/index";

class App extends Component {
  render() {
    return (
      <div id="App">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
        </ThemeProvider>
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
