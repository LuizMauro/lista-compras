import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import FeatherIcons from "react-native-vector-icons/Feather";
import { ReturnRem } from "../utils";

type Props = {
  onPress: any;
};

const ButtonFloat: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <FeatherIcons name="plus" size={ReturnRem(2)} color="#fff" />
    </TouchableOpacity>
  );
};

export { ButtonFloat };

const styles = StyleSheet.create({
  button: {
    width: ReturnRem(4),
    height: ReturnRem(4),
    borderRadius: ReturnRem(2),
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 10000,
    bottom: ReturnRem(5),
    right: ReturnRem(1),
  },
});
