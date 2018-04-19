// TODO write javascript that parses data and generates the appropriate HTML
function generatePeopleTable() {
    $('#peopleTable').DataTable( {
        data: people,
        columns: [
            { data: "firstName", title: "First Name"},
            { data: "lastName", title: "Last Name"},
            { data: "phoneNumber.getString()", title: "Phone Number"},
            { data: "email.getString()", title: "Email"},
            { data: "roles", title: "Role(s)"}

        ]
    } );
};
$( document ).ready(function() {
    generatePeopleTable();

});

function refreshPeopleTable() {
  var datatable = $('#peopleTable').DataTable();
  datatable.clear();
  datatable.rows.add(people);
  datatable.draw();
}
