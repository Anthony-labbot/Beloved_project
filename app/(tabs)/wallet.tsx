import {
  Feather,
  Ionicons
} from "@expo/vector-icons";
import React, { useState } from "react";

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WalletScreen() {
  const [showBalance, setShowBalance] = useState(true);
  const cash = "1200";
  const balance = "$ 12,480,000,000.22"


  const Money = [
          {
            name: "CNGN",
            sub: "Compliant Naira",
            color: "#7B61FF",
            symbol: "N",
          },
          {
            name: "USDT",
            sub: "Tether USD",
            color: "#26A17B",
            symbol: "T",
          },
          {
            name: "USDC",
            sub: "USD Coin",
            color: "#2775CA",
            symbol: "$",
          },
        ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <Text style={styles.header}>Wallets</Text>

        {/* PORTFOLIO CARD */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>My Asset Portfolio</Text>
            <Pressable onPress={() => setShowBalance(!showBalance)}>
            <Feather
            name={showBalance ? "eye" : "eye-off"}
            size={20}
            color="white"
            />
            </Pressable>
          </View>

          <Text style={styles.balance}>{showBalance ? balance : "********"}</Text>
        </View>

        {/* ACTION BUTTONS */}
        <View style={styles.actions}>
          {[
            { icon: "plus", label: "Add Fund" },
            { icon: "arrow-down", label: "Withdraw" },
            { icon: "repeat", label: "Swap" },
            { icon: "file-text", label: "Statement" },
          ].map((item, index) => (
            <View key={index} style={styles.actionItem}>
              <Pressable style={styles.actionBox}>
                <Feather name= {item.icon as any} size={22} color="#2F4BFF" />
              </Pressable>
              <Text style={styles.actionText}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* TABS */}
        <View style={styles.tabs}>
          <View style={styles.activeTab}>
            <Text style={styles.activeTabText}>Stablecoins</Text>
          </View>
          <Pressable style={{alignItems:"center", paddingTop: 6}}>
          <Text style={styles.tabText}>Utility</Text>
          </Pressable>
          <Pressable style={{alignItems:"center", paddingTop: 6}}>
          <Text style={styles.tabText}>Memes 🔥</Text>
          </Pressable>
        </View>

        {/* LIST */}
        {Money.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <View style={[styles.coinIcon, { backgroundColor: item.color }]}>
              <Text style={styles.coinText}>{item.symbol}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.coinName}>{item.name}</Text>
              <Text style={styles.coinSub}>{item.sub}</Text>
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.amount}>$ {cash}</Text>
              <Text style={styles.usd}>≈ {cash}</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#555"
              style={{ marginLeft: 10 }}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0F",
    paddingHorizontal: 16,
  },

  header: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#2F4BFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  cardTitle: {
    color: "#D6DCFF",
    fontSize: 14,
  },

  balance: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    margin: 10
  },

  actionItem: {
    alignItems: "center",
  },

  actionBox: {
    width: 60,
    height: 60,
    backgroundColor: "#EDEFFF",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },

  actionText: {
    color: "#ccc",
    fontSize: 12,
  },

  tabs: {
    flexDirection: "row",
    backgroundColor: "#1A1A1F",
    borderRadius: 30,
    padding: 5,
    marginBottom: 20,
    justifyContent: "space-between",
  },

  activeTab: {
    backgroundColor: "#2F4BFF",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  activeTabText: {
    color: "white",
  },

  tabText: {
    color: "#aaa",
    paddingHorizontal: 15,
    alignSelf: "center",
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  coinIcon: {
    width: 45,
    height: 45,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  coinText: {
    color: "white",
    fontWeight: "bold",
  },

  coinName: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  coinSub: {
    color: "#888",
    fontSize: 12,
  },

  amount: {
    color: "white",
    fontWeight: "bold",
  },

  usd: {
    color: "#888",
    fontSize: 12,
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#111",
  },

  centerBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FF8C00",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -25,
  },

  centerInner: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#2F4BFF",
    justifyContent: "center",
    alignItems: "center",
  },
});