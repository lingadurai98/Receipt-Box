import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,styles } from 'react-native';
function DisclaimerScreen() {
    return (
        <>
        <TouchableOpacity
          style={styles.hamburgerMenuButton}
          onPress={() => setActiveScreen('home')}
        >
          <Text style={styles.hamburgerMenuButtonText}>Menu</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>Disclaimer</Text>
        <Text style={styles.disclaimerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
          nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
          ligula massa, varius a, semper congue, euismod non, mi.
        </Text>
        <Text style={styles.disclaimerText}>
          Proin porttitor, orci nec nonummy molestie, enim est eleifend
          mi, non fermentum diam nisl sit amet
        </Text>
      </>




    );
  }
  export default DisclaimerScreen;