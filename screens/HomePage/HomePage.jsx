import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import Button from "../../components/button/Botton";
import Icon from "react-native-vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import { background__Color } from "../../constants/Constant";

const WelcomeScreen = () => {
  const [notificationsOn, setNotificationsOn] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleNotifications = () => {
    setNotificationsOn(!notificationsOn);
  };

  const handleAboutPress = () => {
    setShowModal1(true);
  };
  const handleTermsPress = () => {
    setShowModal2(true);
  };
  const handleDisclaimerPress = () => {
    setShowModal3(true);
  };
  const handleModalClose1 = () => {
    setShowModal1(false);
  };
  const handleModalClose2 = () => {
    setShowModal2(false);
  };
  const handleModalClose3 = () => {
    setShowModal3(false);
  };
  const handleSettingsPress = () => {
    setShowModal4(true);
  };
  const handleModalClose4 = () => {
    setShowModal4(false);
  };
  const handleUpdatePress = () => {
    console.log("====================================");
    console.log("PASSWORD UPDATED");
    console.log("====================================");
  };

  const handleCancelPress = () => {
    console.log("====================================");
    console.log("CANCELLED");
    console.log("====================================");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <Icon name="close" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.welcomeText}>Welcome User</Text>
      <Text style={styles.loremIpsum}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus
        sapien at dignissim ultrices. Praesent iaculis leo sit amet suscipit
        malesuada. Fusce commodo urna sed bibendum vestibulum.
      </Text>
      <View style={styles.dates}>
        <Text>Last Log In: 03/08/2023</Text>
        <Text>Member Since: 01/01/2022</Text>
      </View>
      <View style={styles.line} />
      <TouchableOpacity style={styles.iconButton} onPress={toggleNotifications}>
        <Icon name="bell" size={30} color="#000" />
        <Text style={styles.iconTitle}>
          {notificationsOn ? "Turn Off Notifications" : "Turn On Notifications"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={handleSettingsPress}>
        <Icon name="cog" size={30} color="#000" />
        <Text style={styles.iconTitle}>Settings</Text>
      </TouchableOpacity>
      <Modal visible={showModal4} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeModalButton}
            onPress={handleModalClose4}
          >
            <Icon name="close" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Settings</Text>
          <Text style={styles.modalTitle}>Change Password</Text>
          <Text style={styles.modalText}>
            This app is provided as is without any warranties or
            representations, implied or expressed. The developer will not be
            liable for any damages arising from the use of this app.
          </Text>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <MaterialIcons name="lock" size={24} color="black" />
              <TextInput
                secureTextEntry
                placeholder="Current password"
                value={currentPassword}
                onChangeText={setCurrentPassword}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <MaterialIcons name="vpn-key" size={24} color="black" />
              <TextInput
                secureTextEntry
                placeholder="New password"
                value={newPassword}
                onChangeText={setNewPassword}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <MaterialIcons name="vpn-key" size={24} color="black" />
              <TextInput
                secureTextEntry
                placeholder="Confirm password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.input}
              />
            </View>
            <TouchableOpacity>
              <Button onPress={handleUpdatePress}>Update</Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button onPress={handleCancelPress}>Cancel</Button>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="question-circle" size={30} color="#000" />
        <Text style={styles.iconTitle}>FAQs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="info-circle" size={30} color="#000" />
        <Text style={styles.iconTitle} onPress={handleAboutPress}>
          About
        </Text>
      </TouchableOpacity>
      <Modal visible={showModal1} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeModalButton}
            onPress={handleModalClose1}
          >
            <Icon name="close" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>About</Text>
          <Text style={styles.modalText}>
            This app is provided as is without any warranties or
            representations, implied or expressed. The developer will not be
            liable for any damages arising from the use of this app.
          </Text>
          <Text style={styles.modalText}>
            This app is provided as is without any warranties or
            representations, implied or expressed. The developer will not be
            liable for any damages arising from the use of this app.
          </Text>
          <Text style={styles.modalText}>
            This app is provided as is without any warranties or
            representations, implied or expressed. The developer will not be
            liable for any damages arising from the use of this app.
          </Text>
        </View>
      </Modal>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="check-square-o" size={30} color="#000" />
        <Text style={styles.iconTitle} onPress={handleTermsPress}>
          Terms of Use
        </Text>
      </TouchableOpacity>
      <Modal visible={showModal2} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeModalButton}
            onPress={handleModalClose2}
          >
            <Icon name="close" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Terms of use</Text>
          <Text style={styles.modalText}>
            This app is provided as is without any warranties or
            representations, implied or expressed. The developer will not be
            liable for any damages arising from the use of this app.
          </Text>
          <Text style={styles.modalText}>
            This app is provided as is without any warranties or
            representations, implied or expressed. The developer will not be
            liable for any damages arising from the use of this app.
          </Text>
          <Text style={styles.modalText}>
            This app is provided as is without any warranties or
            representations, implied or expressed. The developer will not be
            liable for any damages arising from the use of this app.
          </Text>
        </View>
      </Modal>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="exclamation-triangle" size={30} color="#000" />
        <Text style={styles.iconTitle} onPress={handleDisclaimerPress}>
          Disclaimer
        </Text>
      </TouchableOpacity>
      <Modal visible={showModal3} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeModalButton}
            onPress={handleModalClose3}
          >
            <Icon name="close" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Disclaimer</Text>
          <Text style={styles.modalText}>
            This app is provided as is without any warranties or
            representations, implied or expressed. The developer will not be
            liable for any damages arising from the use of this app.
          </Text>
          <Text style={styles.modalText}>
            This app is provided as is without any warranties or
            representations, implied or expressed. The developer will not be
            liable for any damages arising from the use of this app.
          </Text>
          <Text style={styles.modalText}>
            This app is provided as is without any warranties or
            representations, implied or expressed. The developer will not be
            liable for any damages arising from the use of this app.
          </Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: background__Color,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
  loremIpsum: {
    fontSize: 16,
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
  },
  dates: {
    flexDirection: "column",
    marginBottom: 20,
    alignItems: "center",
  },
  line: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginVertical: 40,
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconTitle: {
    marginLeft: 10,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  closeModalButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default WelcomeScreen;
