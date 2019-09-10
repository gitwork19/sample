import React, { Component,  } from 'react';
import { Text, View, StyleSheet } from 'react-native';


const PresentationalComponent = (props) =>{
return(
	<View style = {styles.container}> 
		<Text style = {styles.myState} onPress = {props.updateState}> {props.myState}</Text>
	</View>
	
  );
}

export default PresentationalComponent

const styles = StyleSheet.create({
	myState:{
		color:'blue'
	},
	
	container:{
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'yellow',
		alignItems: 'center',
		height: 700,
		width:500
		
	}
	
})