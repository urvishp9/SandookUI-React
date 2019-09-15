import React, {
    Component
} from 'react';
import {
    AppRegistry,
    Button,
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';



class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const {
            navigate
        } = this.props.navigation;
        return ( <
            Button title = "Go to Jane's profile"
            onPress = {
                () =>
                navigate('Profile', {
                    name: 'Jane'
                })
            }
            />
        );
    }
}

class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Jane',
    };
    render() {
        return (null);
    }
}

const NavTest = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Profile: {
        screen: ProfileScreen
    },
});

AppRegistry.registerComponent('NavTest', () => NavTest);