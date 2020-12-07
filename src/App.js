import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './redux/store';
import MainScreen from './screens/MainScreen';
import CreateScreen from './screens/CreateScreen';
import EditScreen from './screens/EditScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerLayoutPreset: { textAlign: 'center' },
					}}
				>
					<Stack.Screen
						name="Main"
						component={MainScreen}
						options={{
							headerLayoutPreset: 'center',
						}}
					/>
					<Stack.Screen
						name="Create"
						component={CreateScreen}
						screenOptions={headerStyle}
					/>
					<Stack.Screen
						name="Edit"
						component={EditScreen}
						screenOptions={headerStyle}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const headerStyle = { headerTitleAlign: 'center' };

registerRootComponent(App);
