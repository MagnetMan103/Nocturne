import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: Colors[colorScheme ?? 'light'].background,
                        borderRadius: 20,
                        width: '90%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: 20,
                    },
                    tabBarIconStyle: {
                        marginBottom: -15,
                    },
                    tabBarLabelStyle: {
                        marginBottom: -12,
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="explore"
                    options={{
                        href: null,
                    }}
                />
                <Tabs.Screen
                    name="mood"
                    options={{
                        href: null,
                    }}
                />
                <Tabs.Screen
                    name="moodchoice"
                    options={{
                        href: null,
                        tabBarStyle: { display: 'none' },
                    }}
                />
                <Tabs.Screen
                    name="waveform"
                    options={{
                        href: null,
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        title: 'Settings',
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name="settings-sharp" size={24} color={focused ? 'black' : 'gray'} />
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', // Set the background color of the root area
    },
});