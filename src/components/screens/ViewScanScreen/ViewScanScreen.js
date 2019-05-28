import React, { Component } from "react";
import { View, Text } from "react-native";
import {View as GraphicsView} from "expo-graphics";
import ExpoTHREE, {THREE} from "expo-three";
import { Permissions, GLView } from "expo"

class ViewScanScreen extends React.Component {

    static navigationOptions = {
      title: "ViewScan",
    };

    render() {
        return(
            <GraphicsView
              style = {{flex: 1}}
              onContextCreate={this.onContextCreate}
              onRender={this.onRender}
              onResize={this.onResize}
            />
        )
    }

    componentWillMount() {
        THREE.suppressExpoWarnings();
    }

     // This is called by the `ExpoGraphics.View` once it's initialized
    onContextCreate = ({
      gl,
      width,
      height,
      scale: pixelRatio,
    }) => {
      this.renderer = new ExpoTHREE.Renderer({ gl, pixelRatio, width, height });
      this.renderer.setClearColor(0x000000);
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

    onResize = ({ x, y, scale, width, height }) => {
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.SetPixelRatio(scale);
      this.renderer.setSize(width, height);
    }

    onRender = delta => {
      this.cube.rotation.x += 3.5 * delta;
      this.cube.rotation.y += 2 * delta;
      this.renderer.render(this.scene, this.camera);
    };
    
}

export default ViewScanScreen;