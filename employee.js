

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDUOFUxaTiKrLS9agW6NI8EsxNKbRBVMDc",
    authDomain: "employeetimesheet-a8a03.firebaseapp.com",
    databaseURL: "https://employeetimesheet-a8a03.firebaseio.com",
    projectId: "employeetimesheet-a8a03",
    storageBucket: "",
    messagingSenderId: "218489001467"
  };
  firebase.initializeApp(config);

  let database = firebase.database();

  let employeeName = "";
  let role = "";
  let startDate = "";
  let monthlyRate = "";

  $('#add-employee-btn').on("click", function (event) {
    event.preventDefault();
    let employeeName = $('#employee-name-input').val().trim();
    console.log('name' +employeeName)
    let role = $('#role-input').val().trim();
    let startDate = $('#start-input').val().trim();
    let monthlyRate = $('#rate-input').val().trim();
    console.log(employeeName)

    const pushObject = {
      employeeName: employeeName,
      role: role,
      startDate: startDate,
      monthlyRate: monthlyRate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP,
    }

    // console.log(pushObject)

    database.ref().push(pushObject);

  })

  $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
  empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");

  // database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    
