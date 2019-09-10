import React, { Component,  } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class WelcomeUser extends Component{
	
	
	
	render(){
		  const { navigation } = this.props;
		 const itemID = navigation.getParam('itemID', 'NO-ID');
		return(
			<View>
				<Text>{JSON.stringify(itemID)}</Text>
			</View>
		)
	}
		
	
}


export default WelcomeUser;