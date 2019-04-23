import React, { Component } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import '../App.css';
import { HashLink as Link } from 'react-router-hash-link';

import { connect } from 'react-redux';

import { Button } from 'reactstrap';
import { isAbsolute } from 'path';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.language !== this.props.language) {
      this.setState({ language: this.props.language });
      console.log(
        'TCL: Home -> constructor -> state.language',
        this.state.language
      );
      console.log('TCL: Home -> this.props.language', this.props.language);
    }
  }

  handleClick = e => {
    console.log('je suis dans mon click!!!');
    this.props.setLanguage(e);
    this.setState({
      language: this.props.language
    });
  };

  render() {
    return (
      <div>
        <div id='home' style={style.container}>
          <div style={style.titleContainer}>
            <h1
              className='animated fadeInLeft delay-0.8s'
              style={style.mainTitle}
            >
              ANTOINE SAUVAGE
            </h1>
            <h2
              className='animated fadeInRight delay-0.8s'
              style={style.subTitle}
            >
              FULL-STACK DEVELOPPER
            </h2>
          </div>
        </div>
        <div style={style.buttonContainer}>
          {this.state.language == 'en' ? (
            <Button
              value='fr'
              onClick={this.handleClick}
              outline
              color='secondary'
              className='shadow p-2 rounded btn-block'
            >
              Français
            </Button>
          ) : (
            <Button
              value='en'
              onClick={this.handleClick}
              outline
              color='secondary'
              className='shadow p-2 rounded btn-block'
            >
              English
            </Button>
          )}
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    position: 'relative',
    // height: 'calc(100vh - 50px)',
    height: '95vh',
    background:
      'linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url("https://picsum.photos/1000?image=20")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    clipPath: 'polygon(0 0, 100% 0, 100% 80vh, 0 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Montserrat'
  },
  buttonContainer: {
    width: 100,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 40,
    bottom: 40
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: 5,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 17,
    fontWeight: 400,
    letterSpacing: 8,
    textAlign: 'center'
  },
  arrow: {
    position: 'absolute',
    right: 50,
    bottom: 40,
    fontSize: '25px'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingRight: '50px',
    paddingLeft: '50px',
    borderBottom: '1px solid',
    borderTop: '1px solid'
  },
  vline: {
    position: 'absolute',
    top: '50px',
    width: '2px',
    height: 130,
    background: 'white',
    left: '50%',
    marginLeft: '-1px'
  }
};

function mapStateToProps(state) {
  return {
    language: state.language
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLanguage: function(language) {
      // console.log('dispatch ------------->', language.target.value)
      dispatch({
        type: 'switchLanguage',
        language: language.target.value
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
