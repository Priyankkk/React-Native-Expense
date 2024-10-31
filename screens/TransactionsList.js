import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { transactions } from '../data/transactions';

export default function TransactionsList({ navigation }) {
  return (
    <View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Transaction Detail', { transaction: item })}
          >
            <View style={{ padding: 15, borderBottomWidth: 1 }}>
              <Text>{item.name}</Text>
              <Text>${item.amount}</Text>
              <Text>{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
