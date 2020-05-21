import React, { Component } from 'react';
import { Alert, StyleSheet } from 'react-native';
import TouchID from "react-native-touch-id";
import { withRouter } from "react-router-dom";
import Background from '../Components/background';
import Header from '../Components/header';
import TextInput from '../Components/textinput';
import Button from '../Components/button';

class login extends Component {
	constructor() {
		super()
		this.state = {
			biometryType: null,
			username: '',
			password: ''
		};
	}

	componentDidMount() {
		TouchID.isSupported()
			.then(biometryType => {
				this.setState({ biometryType });
			})
	}

	render() {
		return (
			<Background>
				<Header>Login</Header>
				<TextInput
					value={this.state.username}
					onChangeText={(username) => this.setState({ username })}
					label='Email'
				/>
				<TextInput
					value={this.state.password}
					onChangeText={(password) => this.setState({ password })}
					label='Password'
					secureTextEntry={true}
				/>
				<Button mode="contained" onPress={this.onLogin.bind(this)}> Login </Button>
				<Button mode="contained" onPress={this.clickHandler.bind(this)} > Auth </Button>
			</Background>
		);
	}

	onLogin() {
		const { username, password } = this.state;
		this.props.history.push('/Home');
	}

	clickHandler() {
		TouchID.authenticate()
			.then(success => {
				this.props.history.push('/Home');
			})
			.catch(error => {
				console.log(error);
			});
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	row: {
		flexDirection: 'row',
		marginTop: 4,
	},
	button: {
		width: '100%',
		marginVertical: 10,
	}
});

const errors = {
	"LAErrorAuthenticationFailed": "Authentication was not successful because the user failed to provide valid credentials.",
	"LAErrorUserCancel": "Authentication was canceled by the user—for example, the user tapped Cancel in the dialog.",
	"LAErrorUserFallback": "Authentication was canceled because the user tapped the fallback button (Enter Password).",
	"LAErrorSystemCancel": "Authentication was canceled by system—for example, if another application came to foreground while the authentication dialog was up.",
	"LAErrorPasscodeNotSet": "Authentication could not start because the passcode is not set on the device.",
	"LAErrorTouchIDNotAvailable": "Authentication could not start because Touch ID is not available on the device",
	"LAErrorTouchIDNotEnrolled": "Authentication could not start because Touch ID has no enrolled fingers.",
	"RCTTouchIDUnknownError": "Could not authenticate for an unknown reason.",
	"RCTTouchIDNotSupported": "Device does not support Touch ID."
};


export default withRouter(login);
