import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from "react-native";
import Course from "./Course";
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

function getCourseTerm(course) {
  return termMap[course.id.charAt(0)];
}

function CourseList({courses, view}) {
  const [selectedTerm, setSelectedTerm] = useState('Fall');  
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return (
    <ScrollView contentContainerStyle={styles.courseList}>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseSelector courses={termCourses} view={view} />
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