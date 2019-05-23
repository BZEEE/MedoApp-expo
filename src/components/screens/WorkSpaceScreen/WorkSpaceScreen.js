import React, {Component} from 'react';
import {View, Button, Text} from "react-native";


class WorkSpaceScreen extends Component {
    static navigationOptions = {
        title: "WorkSpace",
    };

    render() {
        // const {navigate} = this.props.navigation
        return (
            <View>
                <Button 
                title= "Go to Scans"
                onPress={() => this.props.navigation.push("ViewScan")}
                />
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