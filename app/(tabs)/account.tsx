import { XendColors } from "@/constants/xend-theme";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function MoreScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [biometrics, setBiometrics] = useState(false);

  const copyUsername = async () => {
    await Clipboard.setStringAsync("@Michael_Chuks");
  };

  const settings = [
    {
      title: "Account Settings",
      subtitle: "Edit your profile and next of kin",
      icon: <Feather name="user-plus" size={22} color="#3B82F6" />,
    },
    {
      title: "Verify Phone Number",
      subtitle: "Enable OTP notifications",
      icon: <Feather name="shield" size={22} color="#3B82F6" />,
    },
    {
      title: "KYC Verification",
      subtitle: "Complete your KYC",
      icon: <Feather name="credit-card" size={22} color="#3B82F6" />,
    },
    {
      title: "Support",
      subtitle: "Chat with our support agents",
      icon: <Feather name="message-circle" size={22} color="#3B82F6" />,
    },
    {
      title: "Biometrics",
      subtitle: "Enable Secure Login",
      icon: <MaterialCommunityIcons name="fingerprint" size={22} color="#3B82F6" />,
      isSwitch: true,
    },
    {
      title: "Security",
      subtitle: "Add an extra layer of security",
      icon: <Feather name="shield-off" size={22} color="#3B82F6" />,
    },
  ];

  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    >
    <SafeAreaView style={styles.safe}>
      <View style={[styles.container, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
        {/* HEADER */}
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Account</Text>

          <Pressable>
            <Feather name="more-vertical" size={22} color="#fff" />
          </Pressable>
        </View>

        {/* PROFILE */}
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <MaterialIcons name="person" size={42} color={XendColors.iconBg} />
          </View>
          
          <Text style={styles.username}>@Eloike_Anthony</Text>

          <Pressable onPress={copyUsername}>
            <Feather name="copy" size={20} color="#9CA3AF" />
          </Pressable>
        </View>

        {/* REFERRAL CARD */}
        <Pressable
          style={styles.referralCard}
          onPress={() => router.push("/(tabs)/referral")}
        >
          <View>
            <Text style={styles.refTitle}>Referral</Text>
            <Text style={styles.refSub}>
              Refer friends and earn points
            </Text>
          </View>

          <View style={styles.refRight}>
            <MaterialCommunityIcons name="trophy" size={22} color="#FACC15" />
            <Feather name="chevron-right" size={22} color="#fff" />
          </View>
        </Pressable>

        {/* SETTINGS LIST */}
        <View style={styles.list}>
          {settings.map((item, index) => (
            <Pressable key={index} style={styles.listItem}>
              <View style={styles.left}>
                <View style={styles.iconBox}>{item.icon}</View>

                <View>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemSub}>{item.subtitle}</Text>
                </View>
              </View>

              {item.isSwitch ? (
                <Switch
                  value={biometrics}
                  onValueChange={setBiometrics}
                  trackColor={{ false: "#555", true: "#888" }}
                  thumbColor={biometrics ? "#fff" : "#ddd"}
                />
              ) : (
                <Feather name="chevron-right" size={20} color="#666" />
              )}
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#000",
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  headerText: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "700",
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 2,
    borderColor: "#3B82F6",
    alignItems: "center"
  },

  username: {
    color: "#E5E7EB",
    fontSize: 20,
    fontWeight: "600",
    flex: 1,
  },

  referralCard: {
    backgroundColor: "#2F4BCE",
    borderRadius: 20,
    padding: 18,
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  refTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  refSub: {
    color: "#C7D2FE",
    marginTop: 4,
  },

  refRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  list: {
    marginTop: 24,
    backgroundColor: "#111",
    borderRadius: 20,
    overflow: "hidden",
  },

  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: "#222",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
  },

  itemTitle: {
    color: "#E5E7EB",
    fontSize: 17,
    fontWeight: "600",
  },

  itemSub: {
    color: "#9CA3AF",
    marginTop: 2,
  },
});