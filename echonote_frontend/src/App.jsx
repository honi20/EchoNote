import { Component } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@shared/styles/GlobalStyles";
import { theme } from "@shared/styles/theme";
import ToolBar from "@components/ToolBar";
import PdfBar from "@components/PdfBar";
import { Layout, MainContent, rootStyle, appStyle } from "@/Layout.style";

class App extends Component {
  render() {
    return (
      <div style={rootStyle}>
        <div style={appStyle}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ToolBar />
            <Layout>
              <PdfBar />
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
