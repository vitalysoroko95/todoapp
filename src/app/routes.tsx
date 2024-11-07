import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {TasksScreen} from "pages/tasks";
import {RootStackParamList} from "shared/routes";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Routing = () => {
	return (
		<NavigationContainer independent>
			<RootStack.Navigator initialRouteName="Tasks">
				<RootStack.Screen
					name="Tasks"
					component={TasksScreen}
					options={{
						headerShown: false,
					}}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	);
};
