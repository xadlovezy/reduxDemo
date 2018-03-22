/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import * as countAction from './src/actions/actions'
import { connect } from 'react-redux'; // 引入connect函数

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
 class Home extends Component<Props> {

     shouldComponentUpdate() {
         console.log("更新页面")
         return true
     }

    render() {
        console.log("画页面")
        const { store } = this.context;
        return (
            <View style={styles.container}>
                <Button onPress={this.props.increment} title="+"/>
                <Text>{this.props.count}</Text>
                <Button onPress={this.props.decrement} title="-"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


export default connect(
    (state) => ({
        count: state.reducer.count,
    })
    ,
    (dispatch) => ({
        increment: () => dispatch(countAction.increase()),
        decrement: () => dispatch(countAction.decrease()),
    })
)(Home)
