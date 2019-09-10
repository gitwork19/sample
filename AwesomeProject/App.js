import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';
import PresentationalComponent from './PresentationalComponent'
import Inputs from './Inputs.js'
import Scrollview from  './Scrollview.js'
import Animations from './Animations.js'
import WelcomeUser from './WelcomeUser.js'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
/*
class HelloWorldApp extends Component {
  render() {
	  let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
	
      <View style={{ alignItems: "center" }}>
        <Text>Hello, {this.props.name}</Text>
		
      </View>
    );
  }
}

export default class Custom extends React.Component{
	state = {myState: 'dbvjkbaidvbauibvuib'}
	updateState = () => {this.setState({myState: 'This is updated'})}
render(){
	
	return (
		<View style={{alignItems:"center", top:50 }}>
			//<PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
			<Inputs />
		</View>
	);
}
}*/

const RootStack = createStackNavigator({
	Home: Inputs,
	Welcome: WelcomeUser,
},	
{
	initialRouteName: 'Home'
}
);

const AppContainer = createAppContainer(RootStack)



/*
const App = () => {
   return (
      <Inputs />
	 // <Scrollview />
	 //<Animations />
   )
}
*/
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

