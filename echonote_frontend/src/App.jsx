import { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@shared/styles/GlobalStyles";
import { theme } from "@shared/styles/theme";
import ToolBar from "@components/ToolBar";
import PdfBar from "@components/PdfBar";
import { Layout, MainContent, rootStyle, appStyle } from "@/Layout.style";

class App extends Component {
  state = {
    isPdfBarOpened: false, // PdfBar 열림/닫힘 상태 관리
  };

  togglePdfBar = () => {
    this.setState((prevState) => ({
      isPdfBarOpened: !prevState.isPdfBarOpened,
    }));
  };

  render() {
    const { isPdfBarOpened } = this.state;

    return (
      <div style={rootStyle}>
        <div style={appStyle}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ToolBar
              togglePdfBar={this.togglePdfBar}
              isPdfBarOpened={isPdfBarOpened}
            />
            <Layout>
              <PdfBar isOpened={isPdfBarOpened} />
              <MainContent>
                <p>페이지 내용이 여기에 들어갑니다.</p>
              </MainContent>
            </Layout>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
