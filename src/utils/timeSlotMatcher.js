// src/utils/timeSlotMatcher.js
const findMatchingSlots = (student, mentor) =>
  student.freeTime.filter(time => mentor.availableTime.includes(time))

export default findMatchingSlots
