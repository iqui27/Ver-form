// Configuração do Firebase
var firebaseConfig = {
  apiKey: "AIzaSyC4iWtXt3teaioZVncJOIaTlHc_eEIQ4Ps",
  authDomain: "teste-form-381516.firebaseapp.com",
  databaseURL: "https://teste-form-381516-default-rtdb.firebaseio.com",
  projectId: "teste-form-381516",
  storageBucket: "teste-form-381516.appspot.com",
  messagingSenderId: "62011812101",
  appId: "1:62011812101:web:440ee23f4adf2a9060ef6c",
  measurementId: "G-94DYJ4L7ZM"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Referência ao Firestore
var db = firebase.firestore();

// Referência ao corpo da tabela
var tableBody = document.getElementById('table-body');

// Função para renderizar os dados na tabela
function renderData(doc) {
  var row = document.createElement('tr');
  
  var diaCell = document.createElement('td');
  diaCell.textContent = doc.data().dia;
  row.appendChild(diaCell);

  var emailCell = document.createElement('td');
  emailCell.textContent = doc.data().email;
  row.appendChild(emailCell);

  var horarioCell = document.createElement('td');
  horarioCell.textContent = doc.data().horario;
  row.appendChild(horarioCell);

  var motivoCell = document.createElement('td');
  motivoCell.textContent = doc.data().motivo;
  row.appendChild(motivoCell);

  var nomeCell = document.createElement('td');
  nomeCell.textContent = doc.data().nome;
  row.appendChild(nomeCell);

  var telefoneCell = document.createElement('td');
  telefoneCell.textContent = doc.data().telefone;
  row.appendChild(telefoneCell);

  tableBody.appendChild(row);
}

// Obtém os dados do Firestore e os renderiza na tabela
db.collection('formData').get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    renderData(doc);
  });
});
