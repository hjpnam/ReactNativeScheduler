const termMap = { F: 'Fall', W: 'Winter', S: 'Spring' };
const terms = Object.values(termMap);

function getCourseTerm(course) {
  return termMap[course.id.charAt(0)];
}

function getCourseNumber(course) {
  return course.id.slice(1);
}

const allDays = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'];
const timesPat = /(\d\d?):(\d\d) *[ -] *(\d\d?):(\d\d)/;

function addTimes(course) {
  course.days = allDays.filter(day => course.meets.includes(day));

  const [match, hh1, mm1, hh2, mm2] = timesPat.exec(course.meets);
  if (match) {
    course.hours = {
      start: hh1 * 60 + mm1 * 1,
      end: hh2 * 60 + mm2 * 1
    }
  }
}

function daysOverlap(days1, days2) {
  return days1 && days2 && days2.some(day => days1.includes(day)); 
}

function hoursOverlap(hours1, hours2) {
  return hours1 && hours2 && Math.max(hours1.start, hours2.start) < Math.min(hours1.end, hours2.end);
}

function timeConflict(course1, course2) {
  return daysOverlap(course1.days, course2.days) && hoursOverlap(course1.hours, course2.hours);
}

function courseConflict(course1, course2) {
  return course1 !== course2 && getCourseTerm(course1) === getCourseTerm(course2) && timeConflict(course1, course2);
}

function hasConflict(course, selected) {
  if (!course.days) addTimes(course);
  return selected.some(selection => courseConflict(course, selection));
}

export { getCourseTerm, getCourseNumber, hasConflict, terms };