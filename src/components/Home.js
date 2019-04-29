import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.language !== this.props.language) {
      this.setState({ language: this.props.language });
    }
  }

  handleClick = e => {
    console.log('je suis dans mon click!!!');
    this.props.setLanguage(e);
    this.setState({
      language: this.props.language,
    });
  };

  render() {
    const { language } = this.state;
    return (
      <div>
        <div id="home" className="home">
          <div style={style.titleContainer}>
            <h1 className="animated fadeInLeft delay-0.8s" style={style.mainTitle}>
              ANTOINE SAUVAGE
            </h1>
            <h2 className="animated fadeInRight delay-0.8s" style={style.subTitle}>
              FULL-STACK DEVELOPPER
            </h2>
          </div>
        </div>
        <div style={style.buttonContainer}>
          {language === 'en' ? (
            <Button
              value="fr"
              onClick={this.handleClick}
              outline
              color="secondary"
              className="shadow p-2 rounded btn-block button"
            >
              Français
            </Button>
          ) : (
            <Button
              value="en"
              onClick={this.handleClick}
              outline
              className="shadow p-2 rounded btn-block button"
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
  buttonContainer: {
    width: 100,
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: 40,
    bottom: 40,
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: 5,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 17,
    fontWeight: 500,
    letterSpacing: 7,
    textAlign: 'center',
  },
  arrow: {
    position: 'absolute',
    right: 50,
    bottom: 40,
    fontSize: '25px',
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
  },
  vline: {
    position: 'absolute',
    top: '50px',
    width: '2px',
    height: 130,
    background: 'white',
    left: '50%',
    marginLeft: '-1px',
  },
};

function mapStateToProps(state) {
  return {
    language: state.language,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLanguage(language) {
      // console.log('dispatch ------------->', language.target.value)
      dispatch({
        type: 'switchLanguage',
        language: language.target.value,
      });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
