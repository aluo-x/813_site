// TODO write javascript that parses data and generates the appropriate HTML

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
};

$(document).ready(function() {
  generateEventTable();
});

function refreshEventTable() {
  var datatable = $('#eventTable').DataTable();
  datatable.clear();
  datatable.rows.add(events);
  datatable.draw();
};
