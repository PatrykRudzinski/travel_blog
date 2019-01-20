import React from 'react';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class LayoutAdmin extends React.Component {
  state = {
    collapsed: false,
    path: null,
  };

  componentDidMount = () => {
    window.addEventListener("hashchange", this.updatePath);
    this.updatePath();
  };

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.updatePath);
  }

  updatePath = () => {
    const path = window.location.hash.replace('#', '');
    this.setState({ path });
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { path, menuState } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          breakpoint="md"
          collapsedWidth="80"
          style={{overflow: 'hidden'}}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu
              theme="dark"
              defaultSelectedKeys={['home']}
              selectedKeys={[path || 'home']}
              mode="inline"
              style={{paddingTop: '40px'}}
          >
            <Menu.Item key="home">
              <a href="#">
                <Icon type="home" />
                <span>Home</span>
              </a>
            </Menu.Item>
            <SubMenu
              key="articles"
              title={<span><Icon type="file" /><span>Articles</span></span>}
            >
              <Menu.Item key="articles-list">
                <a href="#articles-list">List</a>
              </Menu.Item>
              <Menu.Item key="articles-edit">
                <a href="#articles-edit">Edit</a>
              </Menu.Item>
              <Menu.Item key="articles-new">
                <a href="#articles-new">New</a>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="logout">
              <Icon type="poweroff" />
              <span>Log out</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '16px' }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutAdmin;