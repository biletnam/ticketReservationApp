import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

class Code extends Component {
  redeem() {
    this.props.navigator.push({
      title : 'Home'
    })
  }
  render() {
    return (
        <View style={styles.loginField}>
          <TextInput placeholder="code"style={styles.input}/>
          <TouchableHighlight>
            <Text onPress={this.redeem.bind(this)} style={styles.button}>
              Redeem code
            </Text>
          </TouchableHighlight>
          <Text style={styles.text}>
            We sent you code.
          </Text>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Code);