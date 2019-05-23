
import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import styles from "./LoginScreenStyleSheet.js";

// use THREE.js library to create particles on login page

class LoginScreen extends Component {
    static navigationOptions = {}

    render() {
        // const {navigate} = this.props.navigation
        return (
            <View style={styles.view}>
                <Text style={styles.logo}>MEDO</Text>
                <Button
                    title= "Login"
                    onPress={() => this.props.navigation.push("WorkSpace")}
                />
            </View>

        );
    }
}

export default LoginScreen;