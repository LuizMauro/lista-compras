import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { ButtonFloat } from "../../components/ButtonFloat";
import { Modal } from "../../components/modal";
import { ReturnRem } from "../../components/utils";

const Home: React.FC = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <View style={styles.container}>
      <ButtonFloat onPress={() => setOpenModal(true)} />

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <View style={styles.containerModal}>
          <Text style={styles.titleModal}>Criar lista</Text>
          <TextInput style={styles.input} placeholder="Nome da sua lista" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Criar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerModal: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    gap: 15,
  },
  titleModal: {
    fontSize: ReturnRem(1.3),
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    width: "80%",
  },
  button: {
    padding: 5,
    backgroundColor: "blue",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: ReturnRem(1),
    color: "#fff",
  },
});
