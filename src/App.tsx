import "./App.less";
import {
    Layout,
    Menu
} from "antd";
import React from "react";
import ReactGA from "react-ga4";
import {
    Link,
    Outlet
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

try {
  ReactGA.initialize(process.env.REACT_APP_GA_ID || "");
} catch (err) {
  console.error("GA initialization failed", err);
}

function App() {
  return (
    <Layout className="app">
      <Header>
        <Link to="/">
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/images/forge_cutout.png`}
            alt=""
          />
        </Link>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/members">
            <Link to="/members">Members</Link>
          </Menu.Item>
          <Menu.Item key="/gallery">
            <Link to="/gallery">Gallery</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <Outlet />
      </Content>

      <Footer className="footer">Copyright © 2021 Iron Assembly</Footer>
    </Layout>
  );
}

export default App;
