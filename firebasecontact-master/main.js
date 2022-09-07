// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
 
    apiKey: "AIzaSyC_5HdVv8y-P6Iu2oVEWmAjCC1k7CsdqYE",
    authDomain: "saab-202dd.firebaseapp.com",
    projectId: "saab-202dd",
    storageBucket: "saab-202dd.appspot.com",
    messagingSenderId: "930340509178",
    appId: "1:930340509178:web:fa9036d441593d8d704043"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var database = firebase.database();

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}