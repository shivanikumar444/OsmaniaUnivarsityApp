import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

// Define types for stack and tab navigators
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type HomeTabParamList = {
  Faculty: undefined;
  MarkAttendance: { subject: string };
};

// Composite Navigation Prop for nested navigation
type FacultyScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeTabParamList, 'Faculty'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology'];

const FacultyScreen: React.FC = () => {
  const navigation = useNavigation<FacultyScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {subjects.map((subject, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate('MarkAttendance', { subject })}
        >
          <Text style={styles.text}>{subject}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 20, marginVertical: 10, backgroundColor: '#f1f1f1', borderRadius: 10 },
  text: { fontSize: 16 },
});

export default FacultyScreen;
