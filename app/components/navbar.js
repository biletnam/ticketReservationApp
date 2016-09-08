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
    back() {
        let navigator = this.props.navigator;
        if (navigator.state.sceneConfigStack.length > 2) {
            navigator.pop();
        }
    }
    render() {

        let backButton;
        if(this.props.navigator.state.sceneConfigStack.length > 2){
            backButton = (
                <Text onPress={this.back.bind(this)} style={styles.leftButton}>
                    {'<'} Back
                </Text>
            );
        }

        return (
            <View style={styles.navbar}>
                <View style={styles.item}>
                    {backButton}
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.rightButton}>Menu</Text>
                </View>
            </View>
        );
    }
}

const actions = {
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const styles = {
    navbar: {
        height: 70,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#eee',
        borderBottomWidth: 1,
    },
    button: {

    },
    title: {
        textAlign: 'center'
    },
    rightButton: {
        color: '#000',
        textAlign: 'right'
    },
    leftButton: {
        color: '#000',
        textAlign: 'left'
    },
    item: {
        flex: 1
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Code);