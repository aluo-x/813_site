// TODO write javascript that parses data and generates the appropriate HTML
function generateTable() {
    $('#example').DataTable( {
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
    generateTable();

});

function refreshTable() {
  var datatable = $('#example').DataTable();
  datatable.clear();
  datatable.rows.add(people);
  datatable.draw();
}

/**
 * TODO:
 *    - [ ] Change generateTable (either make separate functions for each page type, or make it accept params)
 *    - [ ] Change refreshTable (either make separate functions for each page type, or make it accept params)
 */
