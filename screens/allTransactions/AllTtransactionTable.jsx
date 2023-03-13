import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { dummyTransactionData } from "../../constants/Constant";
import { Pressable } from "react-native";
import { FlatList } from "react-native";

const AllTtransactionTable = () => {
  return (
    <View style={styles.table__container}>
      <View style={styles.table__heading__container}>
        <Text style={styles.table__heading}>Receipt Number</Text>
        <Text style={styles.table__heading}>Date</Text>
        <Text style={styles.table__heading}>Transaction Value</Text>
        <Text style={styles.table__heading}>Action</Text>
      </View>
      <View style={styles.datas__container}>
        <FlatList
          data={dummyTransactionData}
          renderItem={({ item }) => (
            <View style={styles.table__Datas__container}>
              <View style={styles.table__data}>
                <Text style={styles.tabel__data__text}>
                  {item.transactionNumber}
                </Text>
                <Text style={styles.tabel__data__text}>{item.place}</Text>
              </View>
              <View style={styles.table__data}>
                <Text style={styles.tabel__data__text}>{item.date}</Text>
                <Text style={styles.tabel__data__text}>{item.time}</Text>
              </View>
              <Text style={styles.table__data}>{item.amount}</Text>
              <Pressable style={styles.table__data}>
                <Text>Receipt</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
      {/* {dummyTransactionData.map((data) => (
        
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  table__container: {
    marginTop: 10,
    flex: 1,
  },
  table__heading__container: {
    flexDirection: "row",
    paddingVertical: 10,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "red",
  },
  table__heading: {
    flex: 1,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
  datas__container: {
    flex: 1,
  },
  table__Datas__container: {
    flexDirection: "row",
    paddingVertical: 10,
    borderStyle: "dashed",
    borderBottomWidth: 1,
    borderColor: "red",
  },
  table__data: {
    flex: 1,
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
  tabel__data__text: {
    fontSize: 10,
    textAlign: "center",
  },
});

export default AllTtransactionTable;
