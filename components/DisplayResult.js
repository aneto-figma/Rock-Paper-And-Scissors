import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ICONS = ["hand-rock", "hand-paper", "hand-scissors"];

export default function DisplayResult({ userChoice, computerChoice }) {
  return (
    <>
      <View style={[styles.column, styles.youColumn]}>
        <FontAwesome5
          name={ICONS[userChoice - 1]}
          size={64}
          color="#f9d835"
          solid
          style={userChoice === 3 ? styles.scissorsLeftIcon : styles.leftIcon}
        />
        <Text style={[styles.playerName, styles.youName]}>You</Text>
      </View>

      <View style={[styles.column, styles.computerColumn]}>
        <FontAwesome5
          name={ICONS[computerChoice - 1]}
          size={64}
          color="#f9d835"
          solid
          style={
            computerChoice === 3 ? styles.scissorsRightIcon : styles.rightIcon
          }
        />
        <Text style={[styles.playerName, styles.computerName]}>Computer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
    paddingVertical: 28,
    borderRadius: 24,
  },
  youColumn: {
    backgroundColor: "rgba(124, 58, 237, 0.20)",
    borderWidth: 1,
    borderColor: "#7C3AED",
  },
  computerColumn: {
    backgroundColor: "#ffffff",
  },
  playerName: {
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
    marginTop: 16,
  },
  youName: {
    color: "#FFFFFF",
  },
  computerName: {
    color: "#373737",
  },
  leftIcon: {
    transform: [{ rotateZ: "80deg" }],
  },
  scissorsLeftIcon: {
    transform: [{ rotateZ: "180deg" }, { rotateX: "180deg" }],
  },
  rightIcon: {
    transform: [{ rotateZ: "-80deg" }, { rotateY: "180deg" }],
  },
  scissorsRightIcon: {
    transform: [
      { rotateZ: "180deg" },
      { rotateY: "180deg" },
      { rotateX: "180deg" },
    ],
  },
});
