import { BetaText } from "@/components/betaText";
import { ChatBubble } from "@/components/chatbutton";
import { TrustFooter } from "@/components/TrustFooter";
import { XendColors } from "@/constants/xend-theme";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logoBars}>
            <View style={[styles.bar, { backgroundColor: "#4f7cff" }]} />
            <View style={[styles.bar, { backgroundColor: "#ff7a00" }]} />
            <View style={[styles.bar, { backgroundColor: "#00c2ff" }]} />
          </View>
          <Text style={styles.headerText}>XEND Finance</Text>
        </View>

        <View style={styles.chatIcon}>
          <ChatBubble />
        </View>
      </View>

      {/* PROFILE */}
      <View style={styles.profileRow}>
        <View style={styles.avatar}>
          <MaterialIcons name="person" size={42} color={XendColors.iconBg} />
        </View>
        <BetaText font_Size="medium" font_Weight="medium" style={styles.welcome}>
          Welcome Eloike_Anthony
        </BetaText>
      </View>

      {/* TITLE */}
      <Text style={styles.title}>Enter your password</Text>

      <Text style={styles.label}>Your Password</Text>

      {/* INPUT */}
      <View style={styles.inputContainer}>
        <Feather name="lock" size={18} color="#aaa" />
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#666"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={18}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

      {/* FORGOT */}
      <Text style={styles.forgot}>Forgot Password?</Text>

      {/* QR BUTTON */}
      <View style={styles.qrWrapper}>
        <TouchableOpacity style={styles.qrButton}>
          <Feather name="maximize" size={22} color="#ff7a00" />
        </TouchableOpacity>
      </View>

      {/* LOGIN */}
      <TouchableOpacity style={styles.loginBtn} onPress={() => password? router.replace({
                                                                              pathname: "/(tabs)",
                                                                              params: { password },
                                                                              }) : null}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* SWITCH ACCOUNT */}
      <Text style={styles.switchText}>
        Not you? <Text style={{ color: "#ff7a00", fontWeight: 600 }}>Switch account</Text>
      </Text>

      {/* SECURITY FOOTER */}
      <TrustFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: XendColors.background,
    padding: 20,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoBars: {
    flexDirection: "row",
    marginRight: 6,
  },

  bar: {
    width: 4,
    height: 14,
    borderRadius: 2,
    marginRight: 2,
  },

  headerText: {
    color: "white",
    fontWeight: "600",
  },

  chatIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginBottom: -13
  },

  /* PROFILE */
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    backgroundColor: "Grey",
    borderWidth: 2,
    borderColor: "#2e6cff",
    justifyContent: "center",
    alignItems: "center",
  },

  welcome: {
    color: "white",
    marginLeft: 12,
  },

  /* TEXT */
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
  },

  label: {
    color: "#aaa",
    marginTop: 15,
  },

  /* INPUT */
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2a2f3a",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 8,
  },

  input: {
    flex: 1,
    color: "white",
    paddingVertical: 12,
    marginHorizontal: 8,
  },

  forgot: {
    color: "white",
    textAlign: "right",
    marginTop: 8,
    fontSize: 12,
  },

  /* QR */
  qrWrapper: {
    alignItems: "center",
    marginTop: 25,
  },

  qrButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  /* LOGIN */
  loginBtn: {
    backgroundColor: "#1b1936",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 25,
  },

  loginText: {
    color: "white",
    fontWeight: "600",
    opacity: 1
  },

  /* FOOTER */
  switchText: {
    textAlign: "center",
    color: "#aaa",
    margin: 20,
  },

  securityRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },

  secureText: {
    color: "#aaa",
    marginLeft: 5,
    fontSize: 12,
  },

  highlight: {
    color: "#1f5eff",
  },

  backed: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 10,
    fontSize: 12,
  },

  partners: {
    textAlign: "center",
    color: "#555",
    fontSize: 12,
    marginTop: 5,
  },
});