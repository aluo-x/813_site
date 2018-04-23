// TODO write javascript that parses data and generates the appropriate HTML
function materializeEventTable(){
  $('#eventTable td').addClass('mdl-data-table__cell--non-numeric');
  $('#eventTable th').addClass('mdl-data-table__cell--non-numeric');
  $('#eventTable td').addClass('mdl-data-table__cell--non-numeric');
  $('#eventTable th').addClass('mdl-data-table__cell--non-numeric');
  $('#eventTable_filter label').addClass('mdl-textfield mdl-js-textfield');
  $('#eventTable_filter input').addClass('mdl-textfield__input');
}

function renderDate(data) {
  const date = new Date(data);
  const options = {
    year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
}

function generateEventTable() {
  $('#eventTable').DataTable({
    data: events,
    columnDefs: [
    {
        targets: [ 0, 1, 2 ],
        className: 'mdl-data-table__cell--non-numeric'
    }
    ],
    columns: [
      { data: 'type', title: 'Type' },
      { data: 'start', title: 'Starts', render: renderDate },
      { data: 'end', title: 'Ends', render: renderDate },
      { data: 'location.getString()', title: 'Location' },
      { data: 'name', title: 'Name' },
    ],
    dom: '<"top"f>rt<"bottom"lip>',
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
