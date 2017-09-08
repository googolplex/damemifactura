
var miusuario = require("firebase-admin");
var quellave = require("./llave/damelafactura-e8fc0d448d41.json");
var firebase = miusuario.initializeApp({
	  // credential: miusuario.credential.cert(serviceAccount)
		// serviceAccount : quellave
		credential: miusuario.credential.cert(quellave)
	, databaseURL: "https://damelafactura-9011a.firebaseio.com/"
});

// var message = {text:'hola mundo',timestamp : new Date().toString()};
var message = {text:'planeta marte',timestamp : new Date().toString()};
var ref = firebase.database().ref('naranja/melon').child('pruebadatos');
var logsRef = ref.child('logs');
var messagesRef = ref.child('messages');
var messageRef = messagesRef.push(message);

// ejemplo de multipath update
var camioncito = {
	'logKey' : messageRef.key,
	'narizotas/dedotes' : "hola estimados alumnos"
};

ref.update(camioncito);



logsRef.child(messageRef.key).set(message);
logsRef.child('count').transaction(function(i) {
	return i+1 ;
});

logsRef.orderByKey().limitToLast(1).on('child_added',function(snap) {
		console.log('agregado',snap.val());
	});
logsRef.on('child_removed',function(snap) {
			console.log('borrado',snap.val());
		});
logsRef.on('child_changed',function(snap) {
				console.log('actualizado',snap.val());
			});
ref.child('logs').on('value',function(snap) {
// logsRef.on('value',function(snap) {
	console.log('valor',snap.val());
})
