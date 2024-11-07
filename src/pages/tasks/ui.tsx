import {FC} from "react";
import {SafeAreaView, StyleSheet, Text} from "react-native";


export const TasksScreen: FC = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>TaskScreen</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
