const courseData = {
  1: [
    { CourseA: "Mathematics", CourseB: "Physics" },
    { CourseA: "English", CourseB: "Chemistry" },
  ],
  2: [
    { CourseA: "History", CourseB: "Geography" },
    { CourseA: "Biology", CourseB: "Computer Science" },
  ],
};

function getCourses(studentId) {
  return $.Deferred(function ($dfd) {
    $dfd.resolve({
      Result: "OK",
      Records: courseData[studentId] || [],
    });
  });
}
