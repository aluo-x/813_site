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
    console.log( "ready!" );
    generateTable();

});
