import React, {Component} from 'react';
import {View, Text} from "react-native"


class WorkSpaceScreen extends Component {
    static navigationOptions = {}

    render() {
        // const {navigate} = this.props.navigation
        return (
            <View>
                <Text>Hello World!</Text>
            </View>
            // <button
            //     title= "go to profile"
            //     onPress={() => navigate('Profile', {name: 'jane'})}
            // />
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       // backgroundColor: 'red',
//     },
// });

export default WorkSpaceScreen;