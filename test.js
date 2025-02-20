$(document).ready(function () {
  console.log("Document ready, initializing jTable...");

  $("#StudentTableContainer").jtable({
    title: "Student List",
    paging: true, // Enable pagination
    sorting: true, // Enable sorting
    defaultSorting: "Name ASC",
    actions: {
      listAction: "",
      deleteAction: "",
      updateAction: "",
      createAction: "",
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
    },
  });

  // Load the table (empty for now)
  $("#StudentTableContainer").jtable("load");
});
