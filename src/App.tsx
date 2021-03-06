import "./App.less";
import {
    Layout,
    Menu
} from "antd";
import React from "react";
import {
    Link,
    Outlet
} from "react-router-dom";
import {
    initAnalytics,
    withLocation
} from "./analytics";

const { Header, Content, Footer } = Layout;

initAnalytics();

const App: React.FC = () => {
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
};

export default withLocation(App);
