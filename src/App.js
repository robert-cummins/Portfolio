import React from 'react';
import './App.css';
import Main from './Components/main'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import { Link } from 'react-router-dom'



function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Robert Cummins" scroll>
          <Navigation>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/">About Me</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
