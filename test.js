$(document).ready(function () {
  console.log("Document ready, initializing jTable...");

  $("#StudentTableContainer").jtable({
    title: "Student List",
    paging: true,
    sorting: true,
    defaultSorting: "Name ASC",
    actions: {
      listAction: function (postData, jtParams) {
        return $.Deferred(function ($dfd) {
          $dfd.resolve({
            Result: "OK",
            Records: [
              {
                StudentId: 1,
                Name: "John Doe",
                Email: "john@example.com",
                Age: 25,
              },
              {
                StudentId: 2,
                Name: "Jane Smith",
                Email: "jane@example.com",
                Age: 22,
              },
            ],
          });
        });
      },
    },
    fields: {
      StudentId: {
        key: true,
        create: false,
        edit: false,
        list: false,
      },
      Name: {
        title: "Name",
        width: "40%",
      },
      Email: {
        title: "Email",
        width: "40%",
      },
      Age: {
        title: "Age",
        width: "20%",
        type: "number",
      },
      Courses: {
        title: "Courses",
        sorting: false,
        width: "5%",
        list: true,
        display: function (studentData) {
          var $button = $("<button>View Courses</button>");
          $button.click(function () {
            $("#StudentTableContainer").jtable(
              "openChildTable",
              $button.closest("tr"),
              {
                title: studentData.record.Name + " - Courses",
                actions: {
                  listAction: function (postData, jtParams) {
                    return getCourses(studentData.record.StudentId);
                  },
                },
                fields: {
                  CourseA: {
                    title: "Course A",
                    width: "50%",
                  },
                  CourseB: {
                    title: "Course B",
                    width: "50%",
                  },
                },
              },
              function (data) {
                data.childTable.jtable("load");
              }
            );
          });
          return $button;
        },
      },
    },
  });

  // Load the table with the dummy row
  $("#StudentTableContainer").jtable("load");
});
