import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import commonOptions from './CommonOptions';

import ScreenStructure from '../screens/ScreenStructure';
import LaunchScreen from "../screens/LaunchScreen";
import Todo from '../screens/Todo';
import Task from '../screens/Edit'
import NewTask from '../screens/NewTask';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ ...commonOptions }} name='todo' component={Todo} />
            <Stack.Screen options={{...commonOptions}} name='edittask' component={Task} />
            <Stack.Screen options={{...commonOptions}} name='newtask' component={NewTask} />
            <Stack.Screen options={{ ...commonOptions }} name='screenStructure' component={ScreenStructure} />
        </Stack.Navigator>
    );
}

export default AppNavigator;