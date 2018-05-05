function openModal(entityType, entityId) {
  // clear existing modal state
  $('#' + entityType + 'Form')[0].reset();
  if (entityType === 'animal') populateBreedsInput();
  $('.modal').addClass('is-active');
  $('button.is-success').removeAttr('disabled');
  $('.mdl-layout__drawer').get(0).style['z-index'] = 0;
  $('.mdl-layout__drawer-button').get(0).style['z-index'] = 0;
  if (entityId) {
    $('#modalLoader').show();
    getEntities(
      entityType,
      entityId,
      populateModalWithData(entityType),
      errorOpeningModal
    );
  }
}

function closeModal() {
  $('.mdl-layout__drawer').css('z-index',5);
  $('.mdl-layout__drawer-button').get(0).style['z-index'] = 4;
  $('.modal').removeClass('is-active');
}

function saveModal(entityType) {
  $('#modalSave').show();
  $('.button.is-success').attr('disabled');
  const [id, data] = getModalData(entityType);
  (id === '')
    ? createEntity(entityType, data, saveModalSuccess(entityType), saveModalError)
    : updateEntity(entityType, id, data, saveModalSuccess(entityType), saveModalError);
  // console.log('[MOCK SAVE]'); // DEBUG:
  // console.log(id); // DEBUG:
  // console.log(data); // DEBUG:
  // saveModalSuccess(entityType); // DEBUG:
}

const saveModalSuccess = (entityType) => () => {
  reloadTable(entityType);
  $('#modalSave').hide();
  closeModal();
}

function saveModalError(error) {
  console.error('Error saving modal:', error);
  $('#modalSave').hide();
  closeModal();
}

function errorOpeningModal(error) {
  $('#modalLoader').hide();
  console.error(error);
}

const populateModalWithData = (entityType) => (data) => {
  $("input[name='idInput']").val(data.id);
  var fields = inputs[entityType];
  fields.forEach(fBlob => {
    var { f, type } = fBlob;
    var value = data[f];
    if (value !== null && value !== undefined) {
      if (type === 'checkbox') {
        $("input[name='" + f + "Input']").prop('checked', (value === 'yes'));
      } else if (type === 'radio') {
        $("input[name='" + f + "Input']")
          .filter("[value=" + value + "]")
          .prop('checked', true);
      } else if (type === 'select') {
        $("select[name='" + f + "Input']").val(value).trigger('change');
      } else if (type === 'text') {
        $("input[name='" + f + "Input']").val(value);
      } else if (type === 'date') {
        $("input[name='" + f + "Input']").val(value.toISOString().substr(0, 10));
      } else if (type === 'dateTime') {
        var year = value.getFullYear();
        var month = parseInt(value.getMonth(), 10) + 1 + '';
        var day = value.getDate();
        if (parseInt(month, 10) < 10) {
          month = '0' + month;
        }
        if (parseInt(day, 10) < 10) {
          day = '0' + day;
        }
        $("input[name='" + f + "DateInput']").val(year + '-' + month + '-' + day);
        $("input[name='" + f + "TimeInput']").val(value.getHours() + ':' + value.getMinutes()) // TODO change this to local time
      } else if (type === 'address') {
        const { name, street1, street2, city, state } = value;
        $("input[name='" + f + "NameInput']").val(name);
        $("input[name='" + f + "Street1Input']").val(street1);
        $("input[name='" + f + "Street2Input']").val(street2);
        $("input[name='" + f + "CityInput']").val(city);
        $("select[name='" + f + "StateInput']").val(state);
      }
    }
  });
  $('#modalLoader').hide();
}

function getModalData(entityType) {
  const id = $("input[name='idInput']").val();
  var fields = inputs[entityType];
  var data = {};
  fields.forEach(fBlob => {
    var { f, type } = fBlob;
    var value;
    if (type === 'checkbox') {
      value = $("input[name='" + f + "Input']").prop('checked');
      value = (f === 'fixed')
        ? (value) ? 'yes' : 'no'
        : value;
    } else if (type === 'radio') {
      value = $("input[name='" + f + "Input']:checked").val();
    } else if (type === 'select') {
      value = $("select[name='" + f + "Input']").val();
    } else if (type === 'text') {
      value = $("input[name='" + f + "Input']").val();
    } else if (type === 'date') {
      var rawVal = $("input[name='" + f + "Input']").val();
      value = (rawVal) ? new Date(rawVal) : null;
    } else if (type === 'dateTime') {
      var rawDate = $("input[name='" + f + "DateInput']").val();
      var rawTime = $("input[name='" + f + "TimeInput']").val();
      value = (rawDate && rawTime) ? new Date(rawDate + 'T' + rawTime) : null;
    } else if (type === 'address') {
      var name = $("input[name='" + f + "NameInput']").val();
      var street1 = $("input[name='" + f + "Street1Input']").val();
      var street2 = $("input[name='" + f + "Street2Input']").val();
      var city = $("input[name='" + f + "CityInput']").val();
      var state = $("select[name='" + f + "StateInput']").val();
      value = { name, street1, street2, city, state };
    }
    // console.log(f + ':', type, ',', value); // DEBUG:
    if (value) {
      data[f] = value;
    }
  });
  return [id, data];
}

function populateBreedsInput() {
  const species = $('select[name="speciesInput"]').val();
  const selector = 'select[name="breedsInput"]';
  // hide the breeds field by default
  $('#breedsField').hide();
  // empty out existing breed options
  $(selector).empty();
  // if there are breed options for the species, populate the select with them and show it
  if (breeds.hasOwnProperty(species)) {
    breeds[species].forEach(b => {
      $('<option></option>')
        .attr('value', b)
        .append(b)
        .appendTo($(selector));
    });
    $('#breedsField').show();
    $(selector).trigger('change');
  }
}

$(document).ready(function() {
  $('select[name="speciesInput"]').on('change', populateBreedsInput);
})

const inputs = {
  'animal': [
    { f: 'name',                type: 'text'      },
    { f: 'adoptionStatus',      type: 'select'    },
    { f: 'gender',              type: 'radio'     },
    { f: 'fixed',               type: 'checkbox'  },
    { f: 'species',             type: 'select'    },
    { f: 'breeds',              type: 'select'    },
    { f: 'birthdate',           type: 'date'      },
    { f: 'microchipNumber',     type: 'text'      },
  ],
  'person': [
    { f: 'firstName',           type: 'text'      },
    { f: 'lastName',            type: 'text'      },
    { f: 'phoneNumber',         type: 'text'      },
    { f: 'email',               type: 'text'      },
    { f: 'roles',               type: 'select'    },
  ],
  'event': [
    { f: 'name',                type: 'text'      },
    { f: 'type',                type: 'select'    },
    { f: 'location',            type: 'address'   },
    { f: 'starts',              type: 'dateTime'  },
    { f: 'ends',                type: 'dateTime'  },
  ],
};

const breeds = {
  'dog': ['Australian Cattle Dog', 'Australian Shepard', 'Border Collie', 'Labrador Retriever', 'Poodle'],
  'cat': ['Maine Coon', 'Siamese'],
}
