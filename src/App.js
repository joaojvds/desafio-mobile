import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './redux/store';
import MainScreen from './screens/MainScreen';
import DetailsScreen from './screens/DetailsScreen';
import CreateScreen from './screens/CreateScreen';
import EditScreen from './screens/EditScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Main" component={MainScreen} />
					<Stack.Screen name="Details" component={DetailsScreen} />
					<Stack.Screen name="Create" component={CreateScreen} />
					<Stack.Screen name="Edit" component={EditScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

registerRootComponent(App);
