import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { ReturnRem } from "../utils";

type Prop = {
  isOpen: boolean;
  onClose: any;
  children: React.ReactNode;
};

const Modal: React.FC<Prop> = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.header} onPress={onClose}>
          <AntDesignIcon name="close" size={ReturnRem(2)} />
        </TouchableOpacity>

        {children}
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10000,
  },
  header: {
    width: "100%",
    padding: ReturnRem(1),
    alignItems: "flex-end",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    position: "absolute",
    width: "90%",
    minHeight: ReturnRem(13),
    height: "auto",
    borderRadius: ReturnRem(1),
    flexDirection: "column",
  },
});

export { Modal };
