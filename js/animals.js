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
};

$(document).ready(function() {
  console.log(animals);
  generateAnimalTable();
});

function refreshAnimalTable() {
  var datatable = $('#animalTable').DataTable();
  datatable.clear();
  datatable.rows.add(animals);
  datatable.draw();
};
