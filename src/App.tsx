import React, { useState, lazy, Suspense } from "react";
import { lightTheme } from "./Styles/Theme";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Nav } from "./Components/Menu/Nav";
import { Details } from "./Routes/Details";
import { UserProvider } from "./Provider/UserProvider";
import { SColumn } from "./Components/GlobalComponents";
import { Indexes } from "./Routes/Indexes/Indexes";
import { Chat } from "./Routes/Details/Chat";
import { GlobalDataProvider } from "./Provider/\bGlobalDataProvider";

const CryptoRank = React.lazy(() => import("./Routes/CryptoRank"));
const Sidebar = React.lazy(() => import("./Components/Menu/Sidebar"));
const DashBoard = React.lazy(() => import("./Routes/DashBoard"));
const Exchanges = React.lazy(() => import("./Routes/Exchanges"));
const Portfolio = React.lazy(() => import("./Routes/Portfolio"));

function App() {
  const [theme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalDataProvider>
        <UserProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Container>
              <BrowserRouter>
                <Sidebar />
                <Wrapper>
                  <Nav />
                  <Content>
                    <Switch>
                      <Route exact path="/dashboard">
                        <DashBoard />
                      </Route>
                      <Route exact path="/">
                        <CryptoRank />
                      </Route>
                      <Route exact path="/exchanges">
                        <Exchanges />
                      </Route>
                      <Route exact path="/portfolio">
                        <Portfolio />
                      </Route>
                      <Route exact path="/indexes">
                        <Indexes />
                      </Route>
                      <Route exact path="/openchat">
                        <Chat expand={true} />
                      </Route>
                      <Route exact path="/details/:id">
                        <Details />
                      </Route>
                    </Switch>
                  </Content>
                </Wrapper>
              </BrowserRouter>
            </Container>
          </Suspense>
        </UserProvider>
      </GlobalDataProvider>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
  color: white;
`;

const Wrapper = styled(SColumn)`
  width: 100%;
  height: auto;
  margin: 32px;
  justify-content: flex-start;
  ${({ theme }) => theme.device.tablet} {
    width: 100%;
    margin: 24px;
  }
  ${({ theme }) => theme.device.tablet} {
    width: 100%;
    margin: 16px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    justify-content: flex-start;
    height: fit-content;
    padding-bottom: 24px;
  }
  ${({ theme }) => theme.device.mobile} {
    padding-bottom: 16px;
  }
`;