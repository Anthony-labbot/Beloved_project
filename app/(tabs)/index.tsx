import { XendColors } from "@/constants/xend-theme";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [showBalance, setShowBalance] = useState(false);

  const [todos, setTodos] = useState([
    { id: "1", text: "Update your profile.", checked: false },
    { id: "2", text: "Verify your Phone Number", checked: false },
    { id: "3", text: "Complete KYC Process Check", checked: false },
  ]);

  const toggleCheck = (id: string) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // ✅ EXACT ICON MATCH DATA
  const actions = [
    {
      title: "To Bank",
      icon: <MaterialCommunityIcons name="bank-outline" size={28} color="#2F4BCE" />,
      badge: "NEW",
    },
    {
      title: "Withdraw",
      icon: <Feather name="arrow-down-circle" size={28} color="#2F4BCE" />,
    },
    {
      title: "Save",
      icon: <MaterialCommunityIcons name="piggy-bank-outline" size={28} color="#2F4BCE" />,
    },
    {
      title: "Invest",
      icon: <MaterialCommunityIcons name="hand-coin-outline" size={28} color="#2F4BCE" />,
    },
    {
      title: "High Yield",
      icon: <Feather name="trending-up" size={28} color="#2F4BCE" />,
      badge: "🔥",
    },
    {
      title: "Swap",
      icon: <Ionicons name="swap-vertical-outline" size={28} color="#2F4BCE" />,
    },
  ];

  return (
  <ScrollView
  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
    <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <MaterialIcons name="person" size={42} color={XendColors.iconBg} />
          </View>

          <View>
            <Text style={styles.greeting}>Hi, @Eloike_Anthony</Text>
            <Text style={styles.sub}>Start saving now</Text>
          </View>
        </View>

        <Pressable style={styles.chatBtn}>
          <Feather name="message-circle" size={20} color="#000" />
        </Pressable>
      </View>

      {/* BALANCE CARD */}
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <Text style={styles.label}>PORTFOLIO BALANCE</Text>

          <Pressable onPress={() => setShowBalance(!showBalance)}>
            <Feather
              name={showBalance ? "eye" : "eye-off"}
              size={18}
              color="white"
            />
          </Pressable>

          <Pressable>
            <Text style={styles.link}>Transaction History ›</Text>
          </Pressable>
        </View>

        <Text style={styles.balance}>
          {showBalance ? "₦1,000,000" : "********"}
        </Text>

        
        
        </View>
          {/* SAVINGS */}
        <View style={styles.savingsBox}>
          <View style={styles.savingsLeft}>
            <View style={styles.leafBox}>
              <MaterialCommunityIcons
                name="sprout-outline"
                size={28}
                color="#2F4BCE"
              />
          </View>

          <View>
            <Text style={styles.savingsTitle}>Total Savings</Text>
            <Text style={styles.savingsAmount}>
              {showBalance ? "₦86,000.00" : "********"}
            </Text>
          </View>
          
          <Pressable
            style={styles.planBtn}
            onPress={() => router.push("/(tabs)/plans")}
          >
            <Text style={styles.planText}>Plans ›</Text>
          </Pressable>
        </View>
      </View>

      {/* QUICK ACTIONS */}
      <Text style={styles.section}>QUICK ACTIONS</Text>

      <View style={styles.grid}>
        {actions.map((item, index) => (
          <Pressable key={index} style={styles.actionItem}>
            <View style={styles.iconBox}>
              {item.icon}

              {item.badge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              )}
            </View>

            <Text style={styles.actionText}>{item.title}</Text>
          </Pressable>
        ))}
      </View>

      {/* TO DO */}
      <Text style={styles.section}>TO DO</Text>

      {todos.map((item) => (
        <Pressable
          key={item.id}
          style={styles.todo}
          onPress={() => toggleCheck(item.id)}
        >
          <View
            style={[
              styles.checkbox,
              item.checked && styles.checkedBox,
            ]}
          />

          <Text style={styles.todoText}>{item.text}</Text>
        </Pressable>
      ))}
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#2F4BCE",
    alignItems: "center"
  },

  greeting: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  sub: {
    color: "#9CA3AF",
  },

  chatBtn: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 30,
  },

  card: {
    backgroundColor: "#2F4BCE",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 20,
    padding: 16,
  },

  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  label: {
    color: "#C7D2FE",
    fontSize: 12,
    letterSpacing: 1,
  },

  link: {
    color: "#fff",
    fontSize: 12,
  },

  balance: {
    color: "white",
    fontSize: 35,
    marginVertical: 12,
    fontFamily: "Arial black",
    letterSpacing: 2,
  },

  savingsBox: {
    backgroundColor: "#E5E7EB",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexShrink: 0
  },

  savingsLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  leafBox: {
    backgroundColor: "#F3F4F6",
    padding: 12,
    borderRadius: 14,
  },

  savingsTitle: {
    color: "#2F4BCE",
    fontWeight: "600",
  },

  savingsAmount: {
    color: "#2F4BCE",
    fontWeight: "bold",
    fontSize: 25,
    width: 150
  },

  planBtn: {
    borderWidth: 1.5,
    borderColor: "#2F4BCE",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    position: "static",
  },

  planText: {
    color: "#2F4BCE",
    fontWeight: "600",
  },

  section: {
    color: "#9CA3AF",
    marginTop: 20,
    marginBottom: 10,
    letterSpacing: 1,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  actionItem: {
    width: "30%",
    alignItems: "center",
    marginBottom: 20,
  },

  iconBox: {
    backgroundColor: "#E5E7EB",
    width: 60,
    height: 60,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  badge: {
    position: "absolute",
    top: -6,
    right: -6,
    backgroundColor: "#EF4444",
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "600",
  },

  actionText: {
    color: "#9CA3AF",
    marginTop: 6,
  },

  todo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: "#2F4BCE",
    borderRadius: 6,
    marginRight: 10,
  },

  checkedBox: {
    backgroundColor: "#2F4BCE",
  },

  todoText: {
    color: "#E5E7EB",
  },
});