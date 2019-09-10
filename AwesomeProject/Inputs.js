import React, { Component,  } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput,Image } from 'react-native';
import Drawer from 'react-native-drawer'
import Menu from './Menu.js'
import WelcomeUser from './WelcomeUser.js' 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class Inputs extends Component {
	state = {
	email:'',
	pwd: '',
	isOpen: false}
	
	
	handleEmail = (text)=> {
		this.setState ({email:text})
		}
	invokeFunct()
	{
		alert("vsdfv")
		
	}

	handlePwd = (text) => {
		this.setState({pwd:text})
		}

	login=(email,pwd)=>{
		alert('Email is ' +email +' \n pwd '+pwd)
		}
		
	
	closeControlPanel = () => {
		this._drawer.close()
	  };
	openControlPanel = () => {
		this._drawer.open()
	  };
	render(){
			return(
			 <Drawer
				ref={(ref) => this._drawer = ref}
			    openDrawerOffset={0.4} // 20% gap on the right side of drawer
				panCloseMask={0.4}
				acceptPan={true}
				type='overlay'
				tapToClose={true}
				content = <Menu />
				>
				
				
			<View style = {styles.container3} >
				<View style = {styles.container2}>
					<TouchableOpacity  onPress = {this.openControlPanel} >
						<Image style={styles.hmbImage} source={require('./hmb.png')} />  
					</TouchableOpacity>
				</View>
				<View style = {styles.container} >
				
					<TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Email"
					   placeholderTextColor = "#9a73ef"
					   autoCapitalize = "none"
					   onChangeText = {this.handleEmail}/>
					
					<TextInput style = {styles.input}
					secureTextEntry={true}
					placeholder  = "Enter Password"
					 placeholderTextColor = "#9a73ef"
					onChangeText  = {this.handlePwd}/>
					
					
					<TouchableOpacity
						style= {styles.submitButton}
						onPress = {()=> this.props.navigation.navigate("Welcome", {itemID:88})}>
						<Text style = {styles.submitButtonText}> Submit </Text>
					</TouchableOpacity>
				</View>
			</View>
		</Drawer>
			)
		}


	}

	
	

export default Inputs

const styles = StyleSheet.create({

	container:{
		paddingTop:20,
		margin: 60,
		borderWidth: 1,
		justifyContent: 'center',
		height: 300,
		width:300
		
	},
	hmbImage:{
		height: 40,
		width:40
	},
	container3:{
		borderWidth: 1,
		height:700,
		backgroundColor:'#ffffff',
		justifyContent:'flex-start'
	},
	container2:{
		height: 40,
		width:80
	},
	input:{
	  margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
	},
	drawerStyles:{
		color:'red',
		height:20,
		width:30
	},
	submitButton:{
		backgroundColor: '#7a42f4',
		padding: 10,
		height: 40,
		margin: 15
	},
	menuButton:{
		backgroundColor: '#7a42f4',
		justifyContent: 'center',
		height: 70,
		width:70
	},
	submitButtonText:{
		color:'white',
		justifyContent: 'center',
		alignItems:'center'
	}
})