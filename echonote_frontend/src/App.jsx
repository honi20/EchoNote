import { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@shared/styles/GlobalStyles";
import { theme } from "@shared/styles/theme";
import { getResizeEventListener } from "@services/responsiveFrame/index";
import ToolBar from "@components/ToolBar";

class App extends Component {
  render() {
    return (
      <div id="App">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ToolBar />
          <main>
            <p>페이지 내용이 여기에 들어갑니다.</p>
          </main>
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
