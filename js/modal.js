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
  } else {
    $("#currentImg").get(0).src = "https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png";
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
  console.log(data);
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
      } else if (type === 'file') {
        // $("input[name='" + f + "Input']").val(value);
        console.log("value",value);
        console.log($("#currentImg"));
        $("#currentImg").get(0).src = value;
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
      console.log('file else if entered')
      value = imageFile;//'data:image/jpeg;base64,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';
      imageFile = '';
      console.log(value);
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
// var getImage = function() {
//   return new Promise(function(resolve, reject){
//       var reader = new FileReader();
//       var modalSave = $('modalSave');
//       var ready = false;
//       modalSave.disabled = true;
//       var fileSelect = document.getElementById("file-select")
//       var f = fileSelect.files;
//       // var result = '';
//       // reader.onloadend = function () {
//       //     modalSave.disabled = false;
//       //     ready = true;
//       //     resolve(result);
//       // }
//       result = reader.readAsDataURL(f[0]);
//     });
// }

$(document).ready(function() {
  $('select[name="speciesInput"]').on('change', populateBreedsInput);
})

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
    { f: 'roles',               type: 'select'    },
  ],
  'event': [
    'name',
    'type',
    'location',
    'starts',
    'ends',
  ],
};

const breeds = {
  'dog': ['Australian Cattle Dog', 'Australian Shepard', 'Border Collie', 'Labrador Retriever', 'Poodle'],
  'cat': ['Maine Coon', 'Siamese'],
}
