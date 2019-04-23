import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import '../App.css';
import 'react-vertical-timeline-component/style.min.css';

const style = {
  position: 'relative',
  backgroundColor: '#dcdde1',
  height: '100vh'
};

const vline = {
  position: 'absolute',
  width: '4px',
  height: '100%',
  background: '#34495e',
  left: '50%',
  marginLeft: '-2px'
};

class Resume extends Component {
  render() {
    return (
      <div style={style}>
        <Container>
          <div style={vline} />

          <Row>
            <Col xs='12' sm='6' className='text-right timeline'>
              <h2 style={style.h1}>Lorem Ipsum</h2>
              <p>
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry."
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              xs='12'
              xm='12'
              sm={{ size: 6, offset: 6 }}
              className='text-left'
            >
              <h2 style={style.h1}>Lorem Ipsum</h2>
              <p>
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry."
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Resume;
