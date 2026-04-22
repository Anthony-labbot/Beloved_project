import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { XendColors } from '@/constants/xend-theme';

const LABELS: Record<string, string> = {
  index: 'Home',
  wallet: 'Wallet',
  referral: 'Referral',
  plans: 'Plans',
  account: 'More',
};

function TabGlyph({
  routeName,
  focused,
}: {
  routeName: string;
  focused: boolean;
}) {
  const dim = focused ? '#FFFFFF' : XendColors.tabInactive;
  switch (routeName) {
    case 'index':
      return <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={dim} />;
    case 'wallet':
      return <Ionicons name={focused ? 'card' : 'card-outline'} size={24} color={dim} />;
    case 'referral':
      return <Ionicons name="people" size={28} color="#FFFFFF" />;
    case 'plans':
      return (
        <MaterialCommunityIcons
          name={focused ? 'piggy-bank' : 'piggy-bank-outline'}
          size={24}
          color={dim}
        />
      );
    case 'account':
      return <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={dim} />;
    default:
      return null;
  }
}

export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const bottom = Math.max(insets.bottom, 8);

  return (
    <View style={[styles.shell, { paddingBottom: bottom }]}>
      <View style={styles.inner}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const onPress = () => {
            if (process.env.EXPO_OS === 'ios') {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          if (route.name === 'referral') {
            return (
              <View key={route.key} style={styles.fabColumn}>
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ selected: isFocused }}
                  accessibilityLabel={descriptors[route.key].options.title ?? 'Referral'}
                  onPress={onPress}
                  style={({ pressed }) => [styles.fab, pressed && { opacity: 0.92 }]}>
                  <TabGlyph routeName="referral" focused />
                </Pressable>
                <Text style={[styles.fabLabel, isFocused && styles.fabLabelActive]}>
                  {LABELS.referral}
                </Text>
              </View>
            );
          }

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={{ selected: isFocused }}
              accessibilityLabel={descriptors[route.key].options.title ?? route.name}
              onPress={onPress}
              style={styles.tab}>
              <TabGlyph routeName={route.name} focused={isFocused} />
              <Text style={[styles.label, isFocused && styles.labelActive]} numberOfLines={1}>
                {LABELS[route.name] ?? route.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    backgroundColor: XendColors.tabBar,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#2C2C2E',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    minHeight: 56,
    paddingTop: 6,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 4,
    gap: 4,
  },
  label: {
    fontSize: 11,
    fontWeight: '500',
    color: XendColors.tabInactive,
  },
  labelActive: {
    color: XendColors.white,
  },
  fabColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 2,
  },
  fab: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: XendColors.primaryBlue,
    borderWidth: 3,
    borderColor: XendColors.referralRing,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
    marginTop: -28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 8,
  },
  fabLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: XendColors.tabInactive,
    marginTop: 2,
  },
  fabLabelActive: {
    color: XendColors.white,
  },
});
