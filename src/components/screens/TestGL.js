
import {GLView, Asset} from "expo"
import React from "react"
import { PositionalAudio } from "three";

export default class TestGL extends React.Component {
    componentWillMount() {
        cancelAnimationFrame(this._rafID);
    }

    render() {
        return(
            <GLView style={{flex: 1}} onContextCreate={this._onGLContextCreate} />
        );
    }

    _onGLContextCreate = async gl => {
        const vert = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(
            vert,
            'precision highp float;'
            'attribute vec2 position;'
            'varying vec2 uv;'
            'void main() {'
                'uv = position;'
                'gl_position = vec4(1.0 - 2.0 * position, 0, 1);'
            '}'
        );
        gl.compileShader(vert);

        const frag = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(
            frag,
            'precision highp float;'
            'uniform sampler2D texture;'
            'varying vec2 uv;'
            'void main() {'
                'gl_FragColor = texture2D(texture, vec2(uv.x, uv.y)'
            '}'
        );
        gl.compileShader(frag);

        const program
    }
}