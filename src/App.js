import React from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';

import { GithubOutlined } from '@ant-design/icons';
import { LinkedinOutlined } from '@ant-design/icons';
import { TrophyOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Projects from './Projects';
import About from './About';
import { Route, Link } from 'react-router-dom';

import './App.css';


const { Header, Footer, Sider, Content } = Layout;


var colours = ['#264653', '#2A9D8F', '#E9C46A', 'F4A261', '#E76F51'],
  i = 0;







function App() {
  return (
    <div class="containerAbout1" id="outerContainer">
      <div>


        <Row type="flex" justify="space-around">
          <Col span={3}>
            <a href="https://github.com/kaibergman">
              <GithubOutlined type="button" style={{ fontSize: '40px' }} class="button" />
            </a>
          </Col>
          <Col span={3}>

          </Col>
          <Col span={3}>
            <a href="https://linkedin.com/in/kai-bergman">
              <LinkedinOutlined type="button" style={{ fontSize: '40px' }} class="button" />
            </a>

          </Col>
          <Col span={3}>

          </Col>
          <Col span={3}>
            <Link to="/Projects">
              <TrophyOutlined type="button" style={{ fontSize: '40px' }} class="button" />
            </Link>
          </Col>
          <Col span={3}>

          </Col>
          <Col span={3}>
            <Link to="/About">
              <UserOutlined type="button" style={{ fontSize: '40px' }} class="button" />
            </Link>
          </Col>

        </Row>
      </div>

    </div>


  );
}
var elementToChange = document.body;

document.body.addEventListener('click', function (event) {
  elementToChange.style.backgroundColor = colours[++i];
  if (i >= colours.length) {
    i = 0;
  }
});

export default App;
