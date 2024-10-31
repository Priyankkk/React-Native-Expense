import React from 'react';
import { View, Text } from 'react-native';
import { transactions } from '../data/transactions';

export default function Summary() {
  const totalExpense = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Summary</Text>
      <Text>Total Expense: ${totalExpense}</Text>
    </View>
  );
}
