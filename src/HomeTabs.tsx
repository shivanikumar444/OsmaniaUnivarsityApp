import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FacultyScreen from './FacultyScreen';
import MarkAttendanceScreen from './MarkAttendance';

type HomeTabParamList = {
  Faculty: undefined;
  MarkAttendance: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabs: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Faculty" component={FacultyScreen} />
      <Tab.Screen name="MarkAttendance" component={MarkAttendanceScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
