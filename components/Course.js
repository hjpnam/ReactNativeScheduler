import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function getCourseNumber(course) {
  return course.id.slice(1);
}

function Course(props) {
  return (
    <TouchableOpacity style={styles.courseButton}>
      <Text style={styles.courseText}>
        {`CS ${getCourseNumber(props.course)}\n${props.course.meets}`}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  courseButton: {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    maxWidth: 90,
    minWidth: 90,
    backgroundColor: '#66b0ff'
  },
  courseText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center'
  }
});

export default Course;