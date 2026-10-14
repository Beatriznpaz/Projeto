import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../pages/home';
import Ranking from '../pages/ranking';
import Chat from '../pages/chat';
import BookRace from '../pages/bookrace';
import { themas } from '../global/themes';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: themas.colors.primary,
                tabBarInactiveTintColor: '#9CB8B5',
            }}
        >
            <Tab.Screen
                name="Início"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Ranking"
                component={Ranking}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="trophy" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubble" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="BookRace"
                component={BookRace}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}