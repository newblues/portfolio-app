import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import ScrollAnimation from 'react-animate-on-scroll';

import '../App.css';

import colors from '../config.js';

class Porfolio extends Component {
  render() {
    return (
      <div style={style.container} id="portfolio">
        <Container>
          <Row>
            <Col xs="12" className="text-center">
              <h3 className="sectionTitle">Portfolio </h3>
            </Col>
          </Row>

          <Row className="rowPorfolio">
            <Col xs="12" md="6" className="d-flex justify-content-center align-items-center">
              <ScrollAnimation className="md-mb" animateIn="fadeInLeft">
                <div className="shadow rounded projectImg">
                  <img
                    className="projectImg"
                    style={style.img}
                    src={require('../images/mymoviesapp.png')}
                    alt="Logo"
                  />
                </div>
              </ScrollAnimation>
            </Col>
            <Col
              xs="12"
              md="6"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div style={style.header}>
                <ScrollAnimation animateIn="bounceIn">
                  <img style={style.logo} src={require('../images/programming.svg')} alt="Logo" />
                </ScrollAnimation>
                <h4 className="sectionSubtitle">My Movies</h4>
              </div>
              <div className="project">
                <p className="text-center">
                  My movies is a web-app single page for viewing last movies release in real-time,
                  and allow you to add your favorite movies in your dashboard. Build Tools :
                  Javascript, ReactJS, JSX, Express, MongoDB, Rest API{' '}
                </p>
                <div style={style.projectbuttons}>
                  <Button outline color="secondary" className="shadow p-2 rounded">
                    View Live Demo
                  </Button>{' '}
                  <Button outline color="secondary" className="shadow p-2 rounded">
                    View on Github
                  </Button>{' '}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              xs="12"
              md="6"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div style={style.header}>
                <ScrollAnimation animateIn="bounceIn">
                  <img style={style.logo} src={require('../images/programming.svg')} alt="Logo" />
                </ScrollAnimation>
                <h4 className="sectionSubtitle">Weather App</h4>
              </div>
              <div className="project">
                <p className="text-center">
                  Weather App is a web-app for viewing weather in real-time. Build Tools : HTML,
                  CSS, BootStrap, Javascript, JQuery, MongoDB, Rest Api (Open Weather Map, LeafLet){' '}
                </p>
                <div style={style.projectbuttons}>
                  <Button outline color="secondary" className="shadow p-2 rounded">
                    View Live Demo
                  </Button>{' '}
                  <Button
                    href="https://github.com/newblues/weather-app"
                    target="_blank"
                    outline
                    color="secondary"
                    className="shadow p-2 rounded"
                  >
                    View on Github
                  </Button>{' '}
                </div>
              </div>
            </Col>
            <Col xs="12" md="6" className="d-flex justify-content-center align-items-center">
              <ScrollAnimation className="md-mt" animateIn="fadeInRight">
                <div className="shadow rounded projectImg">
                  <img
                    className="projectImg"
                    style={style.img}
                    src={require('../images/weatherapp.png')}
                    alt="Logo"
                  />
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50,
    fontFamily: 'Montserrat',
  },
  containerImg: {
    boxShadow: '5px 5px 5px #9E9E9E',
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    margin: '0px 20px 20px 0px',
  },
  img: {
    height: 'auto',
    width: 350,
  },
  projectbuttons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 25,
  },
};

export default Porfolio;
