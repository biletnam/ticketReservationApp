import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  StatusBar,
  Navigator
} from 'react-native';


import Email from 'ticketReservation/app/components/loginComponents/email';
import Code from 'ticketReservation/app/components/loginComponents/code';

class Login extends Component {
  constructor(){
    super();
  }

  render() {
    
    console.log('Render login');

    let field;
    if(this.props.field == 'email'){
      field = <Email />;
    } else if(this.props.field == 'code'){
      field = <Code navigator={this.props.navigator}/>;
    }


    return (
      <Image style={styles.view} source={require('ticketReservation/res/images/loginScreenBackground.jpg')}>
        <StatusBar barStyle="light-content"/>
        <Image style={styles.logo} source={require('ticketReservation/res/images/loginScreenLogo.png')}/>
        {field}
      </Image>
    );
  }
}

const actions = {
    sendEmail: () => {
      return {type : 'sendEmail'};
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    input: state.login.input,
    field: state.login.field
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions : bindActionCreators(actions, dispatch)
  }
}

const styles = {
  view: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    resizeMode: 'cover',
    width: null,
    height : null
  },
  text:{
    color: '#fff',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 15,
    textAlign: 'center'
  },
  logo:{

  },
  button: {
    backgroundColor: '#27ae60',
    alignSelf: 'stretch',
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10

  },
  loginField: {
    paddingTop: 100,
    height: 200,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  input: {
    height:35,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 20,
    color: '#000'
  },
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);