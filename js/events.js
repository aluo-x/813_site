// TODO write javascript that parses data and generates the appropriate HTML
function materializeEventTable(){
  $('#eventTable td').addClass('mdl-data-table__cell--non-numeric');
  $('#eventTable th').addClass('mdl-data-table__cell--non-numeric');
  $('#eventTable td').addClass('mdl-data-table__cell--non-numeric');
  $('#eventTable th').addClass('mdl-data-table__cell--non-numeric');
  $('#eventTable_filter label').addClass('mdl-textfield mdl-js-textfield');  
  $('#eventTable_filter input').addClass('mdl-textfield__input');
}
function generateEventTable() {
  $('#eventTable').DataTable({
    data: events,
    columns: [
      { data: 'type', title: 'Type' },
      { data: 'start.toUTCString()', title: 'Starts' },
      { data: 'end.toUTCString()', title: 'Ends' },
      { data: 'location.getString()', title: 'Location' },
      { data: 'name', title: 'Name' },
    ]
  });
  materializeEventTable();
};

$(document).ready(function() {
  generateEventTable();
});

function refreshEventTable() {
  var datatable = $('#eventTable').DataTable();
  datatable.clear();
  datatable.rows.add(events);
  datatable.draw();
  materializeEventTable();
};
