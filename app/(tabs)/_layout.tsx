import { Tabs } from 'expo-router';
import React from 'react';

import { CustomTabBar } from '@/components/CustomTabBar';

export default function TabLayout() {

  return (
    <Tabs
    tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index" options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="wallet" options={{
          title: 'Wallet',
        }}
      />
      <Tabs.Screen
        name="referral" options={{
          title: 'Referral',
        }}
      />
      <Tabs.Screen
        name="plans" options={{
          title: 'Plans',
        }}
      />
      <Tabs.Screen
        name="account" options={{
          title: 'More',
        }}
      />
    </Tabs>
  );
}
