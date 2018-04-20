// TODO write javascript that parses data and generates the appropriate HTML

function generateAnimalTable() {
  $('#animalTable').DataTable({
    data: animals,
    columns: [
      { data: 'name', title: 'Name' },
      { data: 'adoptionStatus', title: 'Adoption Status' },
      { data: 'gender', title: 'Gender' },
      { data: 'fixed', title: 'Fixed' },
      { data: 'species', title: 'Species' },
      { data: 'breeds', title: 'Breeds' },
    ]
  });
  $('#animalTable td').addClass('mdl-data-table__cell--non-numeric');
  $('#animalTable th').addClass('mdl-data-table__cell--non-numeric');
  $('#animalTable_filter label').addClass('mdl-textfield');  
  $('#animalTable_filter label').addClass('mdl-js-textfield');  
  $('#animalTable_filter input').addClass('mdl-textfield__input');
};

$(document).ready(function() {
  generateAnimalTable();
});

function refreshAnimalTable() {
  var datatable = $('#animalTable').DataTable();
  datatable.clear();
  datatable.rows.add(animals);
  datatable.draw();
};
