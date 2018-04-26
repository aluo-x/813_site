var db;

$(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0VH6BSY3Q_3dr6eEVdWe3-nULguQygaA",
    authDomain: "all-paws-on-deck.firebaseapp.com",
    databaseURL: "https://all-paws-on-deck.firebaseio.com",
    projectId: "all-paws-on-deck",
    storageBucket: "all-paws-on-deck.appspot.com",
    messagingSenderId: "536103745977"
  };
  firebase.initializeApp(config);

  db = firebase.firestore();
});

function getEntities(entityType, entityId, onSuccess, onError) {
  if (!db) {
    console.error('[ERROR] Database not yet initialized');
    return;
  }
  if (entityId) {
    console.log('Getting one ' + entityType + ' with id [' + entityId + ']');
    db.collection(entityType).doc(entityId).get().then(doc => {
      if (doc.exists) {
        onSuccess(Object.assign({}, doc.data(), { id: doc.id }));
      } else {
        onError('No document found of type ' + entityType + ' and id [' + entityId + ']');
      }
    }).catch(error => onError(error));
  } else {
    console.log('Getting all ' + entityType);
    db.collection(entityType).get().then(snapshot => {
      onSuccess(snapshot.map(doc => Object.assign({}, doc.data(), { id: doc.id })));
    }).catch(error => onError(error));
  }
}

function createEntity(entityType, properties, onSuccess, onError) {
  if (!db) {
    console.error('[ERROR] Database not yet initialized');
    return;
  }
  console.log('Creating ' + entityType + ' with:' + JSON.stringify(properties));
  db.collection(entityType).add(properties).then(doc => {
    onSuccess();
  }).catch(error => onError(error));
}

function updateEntity(entityType, entityId, newProperties, onSuccess, onError) {
  if (!db) {
    console.error('[ERROR] Database not yet initialized');
    return;
  }
  console.log('Updating ' + entityType + ' with id [' + entityId + '] with properties: ' + JSON.stringify(newProperties));
  db.collection(entityType).doc(entityId).update(newProperties).then(() => {
    getEntities(entityType, entityId, onSuccess, () => console.warn('[ERROR] Unable to fetch updated ' + entityType + ' [' + entityId + ']'));
  }).catch(error => onError(error));
}
