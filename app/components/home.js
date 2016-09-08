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

import Navbar from 'ticketReservation/app/components/navbar';

class Home extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <View style={styles.wraper}>
                <Navbar navigator={this.props.navigator} title={this.props.title}/>
                <View style={styles.view} source={require('ticketReservation/res/images/loginScreenBackground.jpg') }>
                    <StatusBar barStyle="default"/>
                    <Image style={styles.logo} source={require('ticketReservation/res/images/loginScreenLogo.png') }/>
                </View>
            </View>
        );
    }
}

const actions = {
    sendEmail: () => {
        return { type: 'sendEmail' };
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
        actions: bindActionCreators(actions, dispatch)
    }
}

const styles = {
    wraper: {
        backgroundColor: '#fff',
        flex: 1
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40
    },
    text: {
        color: '#fff',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 15,
        textAlign: 'center'
    },
    logo: {

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
        height: 35,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingRight: 20,
        color: '#000'
    },
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);