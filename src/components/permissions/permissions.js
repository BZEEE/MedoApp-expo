import { Permissions } from "expo";
import { View } from "expo-graphics";


// Permissions

// CAMERA
// AUDIO_RECORDING
// LOCATION
// USER_FACING_NOTIFICATIONS
// NOTIFICATIONS
// CONTACTS
// SYSTEM_BRIGHTNESS
// CAMERA_ROLL
// CALENDER
// REMINDERS
// SMS

export default class App extends React.Component {
    state = {
        ststus: null,
    }

    permissionFlow = async() => {
        const { states } = await Permissions.askAsync(Permissions.CONTACTS)

        this.setState({status})

        if (status !== 'granted') {
            Linking.openURL('app-settings');
            return;
        }

        const {data} = await Contacts.getContactAsync({pageSize: 1});
    }

    render() {
        return (
            <View>
                <Text onPress={this.permissionFlow}>
                    Permissions: {this.state.ststus}
                </Text>
            </View>
        )
    }

}
