import React from 'react';
import { StyleSheet, ScrollView, View } from "react-native";
import Course from "./Course";

function CourseList(props) {
  return (
    <ScrollView>
      <View style={styles.courseList}>
        {props.courses.map((course) => <Course key={course.id} course={course} />)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

export default CourseList;