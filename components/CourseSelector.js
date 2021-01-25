import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Course from './Course';
import { hasConflict } from '../utils/course';

function CourseSelector({courses, view}) {
  const [selected, setSelected] = useState([]);

  const toggle = (course) => {
    return setSelected((selected) => {
      return selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    }); 
  };

  return (
    <View style={styles.courseList}>
      {
        courses.map(course => (
          <Course key={course.id} 
            course={course} 
            isDisabled={hasConflict(course, selected)}
            isSelected={selected.includes(course)} 
            select={toggle} 
            view={view} 
          />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'space-between'
  }
});

export default CourseSelector;