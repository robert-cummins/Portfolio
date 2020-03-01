import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'


function Navbar() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header title="Title" scroll>
              <Navigation>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
          </Content>
      </Layout>
  </div>
    );
  }
  
  export default Navbar;