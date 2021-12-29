import "./App.less";
import { Layout, Menu, message } from "antd";
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import ReactGA from "react-ga4";

const { Header, Content, Footer } = Layout;

try {
  ReactGA.initialize(process.env.REACT_APP_GA_ID || "");
} catch (err) {
  console.error("GA initialization failed", err);
}

function App() {
  useEffect(() => {
    message.warning("This site is a work in progress!", 0);
  });

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
          <Menu.Item key="/about">
            <Link to="/about">About</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="content">
        <Outlet />
      </Content>

      <Footer className="footer">Iron Assembly 2021</Footer>
    </Layout>
  );
}

export default App;
