function openModal(entityType, entityId) {
  // clear existing modal state
  $('#' + entityType + 'Form')[0].reset();
  if (entityType === 'animal') populateBreedsInput();
  $('.modal').addClass('is-active');
  $('button.is-success').removeAttr('disabled');
  $('.mdl-layout__drawer').get(0).style['z-index'] = 0;
  $('.mdl-layout__drawer-button').get(0).style['z-index'] = 0;
  hideSaveLoading();
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

function closeModal(entityType) {
  $('.mdl-layout__drawer').css('z-index',5);
  $('.mdl-layout__drawer-button').get(0).style['z-index'] = 4;
  $('.modal').removeClass('is-active');
  if(entityType){
    $('#' + entityType + 'Modal').load(entityType + 'Modal.html', prepareModal);
  }
  else {
    $('#' + 'animal' + 'Modal').load('animal' + 'Modal.html', prepareModal);
    $('#' + 'people' + 'Modal').load('people' + 'Modal.html', prepareModal);
    $('#' + 'event' + 'Modal').load('event' + 'Modal.html', prepareModal);
  }
}

function showSaveLoading() {
  var modalSave = $('#modalSave')
  modalSave.addClass("fa fa-spinner fa-spin");
  modalSave.text("");
}
function hideSaveLoading() {
  var modalSave = $('#modalSave')
  modalSave.removeClass("fa fa-spinner fa-spin");
  modalSave.text("save");
}

function saveModal(entityType) {
  showSaveLoading();
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
  closeModal(entityType);
}

function saveModalError(error) {
  console.error('Error saving modal:', error);
  closeModal();
}

function errorOpeningModal(error) {
  $('#modalLoader').hide();
  console.error('Error opening modal:', error);
}

function deleteModalEntity(event, entityType) {
  event.preventDefault();
  const [id, data] = getModalData(entityType);
  (id === '')
    ? console.error('attempted to delete non-created entity')
    : deleteEntity(entityType, id, deleteModalEntitySuccess(entityType), deleteModalEntityError);
  closeModal(entityType);
}

const deleteModalEntitySuccess = (entityType) => () => {
  reloadTable(entityType);
  closeModal(entityType);
}

function deleteModalEntityError(error) {
  console.error('Error deleting entity:', error);
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
      } else if (type === 'checklist') {
        value.forEach(v => $("input[name='" +  v + "']").trigger('click'));
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
    } else if (type === 'checklist') {
      value = [];
      $(".rolesInput").each((k, v) => {
        if (v.checked) {
          value.push(v.name);
        }
      });
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
      for (var p in value) {
        if (value[p] === null || value[p] === undefined) {
          delete value[p];
        }
      }
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

function getImage() {

    var reader = new FileReader();
    var file = document.getElementById("file-select").files[0];
    // if(f[0].size > 10000){
    //   alert("file size too big!");
    //   return;
    // }
    ImageTools.resize(file, {
        width: 100, // maximum width
        height:100
    }, function(blob, didItResize) {
        console.log("didItResize",didItResize);
        if(!didItResize && file.size > 10000){
          alert("Please try resizing your image to 100px x 100px");
          return;
        }
        reader.readAsDataURL(blob);
    });
    reader.onloadend = function () {
        imageFile = reader.result;
        $("#currentImg").get(0).src = imageFile;
    }


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
    { f: 'roles',               type: 'checklist' },
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
  'dog': ["Affenpinscher", "Afghan Hound", "Airedale Terrier", "Akita", "Alaskan Malamute", "American Bulldog", "American Cocker Spaniel", "Australian Cattle Dog", "Australian Shepherd", "Basenji", "Basset Hound", "Beagle", "Bernese Mountain Dog", "Bloodhound", "Border Collie", "Border Terrier", "Boston Terrier", "Bull Terrier", "Bulldog", "Chihuahua", "Dachshund", "Dalmatian", "Doberman Pinscher", "English Cocker Spaniel", "Flat-Coated Retriever", "Fox Terrier", "German Shepherd", "Golden Retriever", "Great Dane", "Greyhound", "Irish Setter", "Jack Russell Terrier", "King Charles Spaniel", "Labrador Retriever", "Maltese", "Miniature American Shepherd", "Miniature Pinscher", "Newfoundland", "Papillon", "Pointer", "Pomeranian", "Poodle", "Pug", "Rat Terrier", "Rottweiler", "Shiba Inu", "Shih Tzu", "Siberian Husky", "St. Bernard", "Vizsla", "Weimaraner", "West Highland White Terrier", "Whippet"],
  'cat': ['Bengal', 'Bobtail', 'Domestic Shorthair', 'Maine Coon', 'Persian', 'Ragdoll', 'Russian Blue', 'Scottish Fold', 'Siamese', 'Sphynx'],
}
