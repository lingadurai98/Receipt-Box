import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AnimatedHeader from "../../components/animatedHeader/AnimatedHeader";
import { Text, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Pressable } from "react-native";
import { dropDownDummyItems } from "../../constants/Constant";
import AllTtransactionTable from "./AllTtransactionTable";

const Alltransactions = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const [showFilter, setShowFilter] = useState(false);

  const [selectedItem, setSelectedItem] = useState(dropDownDummyItems[0].value);

  // Start Date
  const handleStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const handleStartButtonPress = () => {
    setShowStartDatePicker(true);
  };

  // End Date
  const handleEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  const handleEndButtonPress = () => {
    setShowEndDatePicker(true);
  };

  // DropDown
  const handleDropDownChange = (itemValue) => {
    setSelectedItem(itemValue);
  };
  // Filter Handler
  const filterHandler = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <AnimatedHeader />
      <View style={styles.filter}>
        <Pressable onPress={filterHandler}>
          <Text style={styles.filter__text}>Filters</Text>
        </Pressable>
        {showFilter && (
          <View style={styles.filter__container}>
            <View style={styles.filter__content}>
              <TextInput
                style={styles.input__element}
                placeholder="Enter Receipt number"
              />
              <TextInput
                style={styles.input__element}
                placeholder="Enter Store name"
              />
            </View>
            <View style={styles.filter__content}>
              <View style={styles.date__button__container}>
                <Pressable
                  style={styles.date__button}
                  onPress={handleStartButtonPress}
                >
                  <Text style={styles.date__Text}>Start Date</Text>
                </Pressable>
                {showStartDatePicker && (
                  <DateTimePicker
                    testID="datePicker"
                    value={startDate}
                    mode="date"
                    display="default"
                    onChange={handleStartDateChange}
                  />
                )}
                <Pressable
                  style={styles.date__button}
                  onPress={handleEndButtonPress}
                >
                  <Text style={styles.date__Text}>End Date</Text>
                </Pressable>
                {showEndDatePicker && (
                  <DateTimePicker
                    testID="datePicker"
                    value={startDate}
                    mode="date"
                    display="default"
                    onChange={handleEndDateChange}
                  />
                )}
              </View>
              <Picker
                style={styles.picker__container}
                selectedValue={selectedItem}
                onValueChange={handleDropDownChange}
              >
                {dropDownDummyItems.map((item) => (
                  <Picker.Item
                    style={styles.picker__item}
                    key={item.id}
                    label={item.value}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>
          </View>
        )}
      </View>

      {/* Tables */}
      <AllTtransactionTable />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#C0C0C0" },
  filter: {
    position: "relative",
  },
  filter__text: {
    paddingLeft: 20,
    marginTop: 10,
    color: "#346800ff",
    fontWeight: "700",
  },
  filter__container: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  filter__content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  date__button__container: {
    flexDirection: "row",
    width: "48%",
    gap: 10,
    justifyContent: "center",
  },
  date__button: {
    backgroundColor: "#346800ff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  date__Text: {
    fontSize: 10,
    color: "#c0c0c0",
  },
  input__element: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#346800ff",
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 10,
    width: "48%",
  },
  picker__container: {
    height: 20,
    width: "48%",
    fontSize: 30,
  },
  picker__item: {
    fontSize: 10,
  },
});
export default Alltransactions;
