function openModal(entityType, entityId) {
  // clear existing modal state
  $('#' + entityType + 'Form')[0].reset();
  if (entityType === 'animal') populateBreedsInput();
  $('.modal').addClass('is-active');
  $('button.is-success').removeAttr('disabled');
  $('.mdl-layout__drawer').get(0).style['z-index'] = 0;
  $('.mdl-layout__drawer-button').get(0).style['z-index'] = 0;
  if (entityId) {
    // editing entity
    $('#' + entityType + 'DeleteButton').show();
    $('#' + entityType + 'ModalTitle').text('Edit ' + entityType.charAt(0).toUpperCase() + entityType.substr(1));
    $('#modalLoader').show();
    getEntities(
      entityType,
      entityId,
      populateModalWithData(entityType),
      errorOpeningModal
    );
  } else {
    $('#' + entityType + 'DeleteButton').hide();
    if(entityType === "animal" || entityType === "person"){
      $("#currentImg").get(0).src = "https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png";
    }
    // adding entity
    $('#' + entityType + 'ModalTitle').text('Add ' + entityType.charAt(0).toUpperCase() + entityType.substr(1));
  }
}

function closeModal() {
  $('.mdl-layout__drawer').css('z-index',5);
  $('.mdl-layout__drawer-button').get(0).style['z-index'] = 4;
  $('.modal').removeClass('is-active');
  $('#animalModal').load('animalModal.html', prepareModal);
}

function saveModal(entityType) {
  $('#modalSave').show();
  $('.button.is-success').attr('disabled');
  const [id, data] = getModalData(entityType);
  // console.log(data);
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

function deleteModalEntity(event, entityType) {
  event.preventDefault();
  $('#modalSave').show();
  const [id, data] = getModalData(entityType);
  (id === '')
    ? console.error('attempted to delete non-created entity')
    : deleteEntity(entityType, id, deleteModalEntitySuccess(entityType), deleteModalEntityError);
  closeModal();
}

const deleteModalEntitySuccess = (entityType) => () => {
  reloadTable(entityType);
  $('#modalSave').hide();
  closeModal();
}

function deleteModalEntityError(error) {
  console.error('Error deleting entity:', error);
  $('#modalSave').hide();
  closeModal();
}

const populateModalWithData = (entityType) => (data) => {
  $("input[name='idInput']").val(data.id);
  var fields = inputs[entityType];
  fields.forEach(fBlob => {
    var { f, type } = fBlob;
    var value = data[f];
    if (value !== null && value !== undefined) {
      if (type === 'checkbox') {
        if(value === 'yes'){
          $("input[name='" + f + "Input']").trigger('click');
        }
      } else if (type === 'radio') {
        $("input[name='" + f + "Input']")
          .filter("[value=" + value + "]")
          .prop('checked', true);
      } else if (type === 'select') {
        $("select[name='" + f + "Input']").val(value).trigger('change');
      } else if (type === 'text') {
        $("input[name='" + f + "Input']").val(value).trigger('change');
      } else if (type === 'date') {
        $("input[name='" + f + "Input']").val(value.toISOString().substr(0, 10));
      } else if (type === 'file') {
        $("#currentImg").get(0).src = value;
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
    } else if (type === 'file') {
      value = imageFile;
      imageFile = '';
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
  const species = $('input[name="speciesInput"]').val();
  const selector = 'select[name="breedsInput"]';
  // hide the breeds field by default
  $('#breedsField').hide();
  // deselect existing selection
  $(selector).val(null);
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
imageFile = '';
/* stackoverflow */
function getImage() {

    var reader = new FileReader();
    var f = document.getElementById("file-select").files;

    reader.onloadend = function () {
        imageFile = reader.result;
        $("#currentImg").get(0).src = imageFile;
    }
    reader.readAsDataURL(f[0]);

}

function prepareModal() {
  $("#speciesInput").on('change', populateBreedsInput);
  $('select[name="breedsInput"]').select2();
  $('select[name="speciesInput"]').select2();
  $('select[name="adoptionStatusInput"]').select2();
  if(!(typeof(componentHandler) == 'undefined')){
    componentHandler.upgradeAllRegistered();
  }
}

$(document).ready(prepareModal);

const inputs = {
  'animal': [
    { f: 'picture',             type: 'file'      },
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
    { f: 'picture',             type: 'file'      },
    { f: 'firstName',           type: 'text'      },
    { f: 'lastName',            type: 'text'      },
    { f: 'phoneNumber',         type: 'text'      },
    { f: 'email',               type: 'text'      },
    { f: 'roles',               type: 'checkbox'  },
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
  'cat': ['Domestic Shorthair', 'Maine Coon', 'Russian Blue', 'Siamese'],
}
