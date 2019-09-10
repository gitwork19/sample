import React, {Component} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Drawer from 'react-native-drawer'
import Inputs from './Inputs.js'

class Menu extends Component {  
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  handleclieck(){
	  
  }
  
  render () {
    return (
	<View style={styles.container3}>
			<TouchableOpacity
				style= {styles.submitButton}
				onPress = <Inputs />>
				<Text style = {styles.submitButtonText}> Home </Text>
			</TouchableOpacity>
			<TouchableOpacity
				style= {styles.submitButton}
				onPress ={this.handleclieck}>
				<Text style = {styles.submitButtonText}> Notifications </Text>
			</TouchableOpacity>
			<TouchableOpacity
				style= {styles.submitButton}
				onPress = {this.handleclieck}>
				<Text style = {styles.submitButtonText}> Somthing!!! </Text>
			</TouchableOpacity>
	</View>
      
    )
  }
}
	

export default Menu

const styles = StyleSheet.create({

	container:{
		paddingTop:20,
		margin: 60,
		borderWidth: 1,
		justifyContent: 'center',
		height: 300,
		width:300
		
	},
	
	container3:{
		borderWidth: 1,
		height:700,
		backgroundColor:'#ffffff'
		
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
		margin: 2
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
