
import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";
import styles from "./LoginScreenStyleSheet.js";
import {View as GraphicsView} from "expo-graphics";
import ExpoThree, {THREE} from "expo-three";

// use THREE.js library to create particles on login page

class LoginScreen extends Component {
    static navigationOptions = {}

    render() {
        // const {navigate} = this.props.navigation
        return (
            <View style={styles.view}>
                <GraphicsView
                    onContextCreate={this.onContextCreate}
                    onRender={this.onRender}
                />
                <Text style={styles.logo}>MEDO</Text>
                <TextInput style={styles.username}>
                    {/* onChangeText={ (text) =>this.setState({text}) }
                    value={this.state.text}  */}
                </TextInput>
                <TextInput style={styles.password}>
                    {/* onChangeText={ (text) =>this.setState({text}) }
                    value={this.state.text}  */}
                </TextInput>
                <Button style={styles.button}
                    title="Login"
                    onPress={() => this.props.navigation.push('WorkSpace')}
                />
            </View>
            // <Button
            //     title= "go to profile"
            //     onPress={() => navigate('Profile', {name: 'jane'})}
            // />
        );
    }

    componentWillMount() {
        THREE.suppressExpoWarnings();
    }

     // This is called by the `ExpoGraphics.View` once it's initialized
  onContextCreate = async ({
    gl,
    width,
    height,
    scale: pixelRatio,
  }) => {
    this.renderer = new ExpoTHREE.Renderer({ gl, pixelRatio, width, height });
    this.renderer.setClearColor(0xffffff)
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const material = new THREE.MeshPhongMaterial({
      color: 0xff0000,
    });
    
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.scene.add(new THREE.AmbientLight(0x404040));

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(3, 3, 3);
    this.scene.add(light);
  };

  onRender = delta => {
    this.cube.rotation.x += 3.5 * delta;
    this.cube.rotation.y += 2 * delta;
    this.renderer.render(this.scene, this.camera);
  };


}

export default LoginScreen;