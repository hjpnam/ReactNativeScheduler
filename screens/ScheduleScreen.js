import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import CourseList from '../components/CourseList';
import UserContext from '../UserContext';


function Banner(props) {
  return (
    <Text style={styles.bannerStyle}>{props.title || '[loading...]'}</Text>
  );
}

function ScheduleScreen({ navigation }) {
  const [schedule, setSchedule] = useState({ title: '', courses: [] });
  const user = useContext(UserContext);
  const canEdit = user && user.role === 'admin';

  function view(course) {
    navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
  }

  useEffect(() => {
    const fetchSchedule = () => {
      return fetch('https://courses.cs.northwestern.edu/394/data/cs-courses.php')
        .then(res => res.json())
        .then(json => setSchedule(json));
    }
    fetchSchedule();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-start',
    paddingTop: 20
  },
  textStyle: {
    color: '#888',
    fontSize: 32,
  },
});

export default ScheduleScreen;