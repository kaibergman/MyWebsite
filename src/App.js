import React from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';

import { GithubOutlined } from '@ant-design/icons';
import { LinkedinOutlined } from '@ant-design/icons';
import { TrophyOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import Projects from './Projects';
import About from './About';
import { Route, Link } from 'react-router-dom';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;


var colors = ["#05668D", "#028090", "#00A896", "#02C39A", "#F0F3BD"]; //select background colours
var currentIndex = 0;

setInterval(function () { //background colours
  document.body.style.cssText = "background-color: " + colors[currentIndex];
  currentIndex++;
  if (currentIndex == undefined || currentIndex >= colors.length) {
    currentIndex = 0;
  }
}, 5000);





function App() {
  return (
    <div class="container">
      <div>


        <Row type="flex" justify="space-around">
          <Col span={3}>
            <Link to="//github.com/kaibergman">
              <GithubOutlined type="button" onClick="" style={{ fontSize: '40px' }} />
            </Link>
          </Col>
          <Col span={3}>

          </Col>
          <Col span={3}>
            <Link to="//linkedin.com/in/kai-bergman">
              <LinkedinOutlined type="button" style={{ fontSize: '40px' }} />
            </Link>
          </Col>
          <Col span={3}>

          </Col>
          <Col span={3}>
            <Link to="./Projects">
              <TrophyOutlined type="button" style={{ fontSize: '40px' }} />
            </Link>
          </Col>
          <Col span={3}>

          </Col>
          <Col span={3}>
            <Link to="./About">
              <UserOutlined type="button" onClick="" style={{ fontSize: '40px' }} />
            </Link>
          </Col>

        </Row>
      </div>

    </div>


  );
}

export default App;
