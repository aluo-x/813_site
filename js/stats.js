var stats = {};

$(function() {
  const animals = getEntities('animal');

  stats['totalNumberOfAnimals'] = totalNumber(animals);
  stats['totalNumberOfAnimalsAvailableOrPending'] = numberAvailableOrPending(animals);
  // etc.
});


function totalNumber(data) {
  // TODO
  return 72;
}

function numberAvailableOrPending(data) {
  // TODO
  return 32;
}

function numberAvailable(data) {
  // TODO
  return 30;
}

function numberFostered(data) {
  // TODO
  return 27;
}
