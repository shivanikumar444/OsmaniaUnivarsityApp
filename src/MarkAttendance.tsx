import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Switch, Button, Alert } from 'react-native';

type Student = {
  id: number;
  rollNumber: string;
  name: string;
  fatherName: string;
};

const students: Student[] = [
    {id: 'Srerial No.', rollNumber: 'Student Name', fatherName: 'Father name'},
  { id: 1, rollNumber: '001', name: 'John Doe', fatherName: 'Robert Doe' },
  { id: 2, rollNumber: '002', name: 'Jane Smith', fatherName: 'Henry Smith' },
  { id: 3, rollNumber: '003', name: 'Michael Brown', fatherName: 'James Brown' },
];

const MarkAttendance: React.FC = () => {
  const [attendance, setAttendance] = useState<{ [key: number]: boolean }>({});

  const toggleAttendance = (id: number) => {
    setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mark Attendance</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.rollNumber}</Text>
            <Text>{item.name}</Text>
            <Text>{item.fatherName}</Text>
            <Switch
              value={!!attendance[item.id]}
              onValueChange={() => toggleAttendance(item.id)}
            />
          </View>
        )}
      />
      <View style={styles.buttons}>
        <Button title="Cancel" onPress={() => Alert.alert('Cancelled')} />
        <Button title="Save to Draft" onPress={() => Alert.alert('Saved to Draft')} />
        <Button title="Submit" onPress={() => Alert.alert('Attendance Submitted')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 18, marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 },
  buttons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 },
});

export default MarkAttendance;
