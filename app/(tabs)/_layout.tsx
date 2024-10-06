import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import {FontAwesome} from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
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
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
              <FontAwesome name="search" size={24} color={focused ? 'black' : 'gray'} />
          ),
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
                tabBarStyle: { display: 'none' }, // Hide tab bar for moodchoice route

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
  );
}
