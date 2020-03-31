




  var firebaseConfig = {
    apiKey: "AIzaSyBA51Q9lAHD5Yjfcefl8ivjObhrIRkD9yw",
    authDomain: "gmcode-7ef9f.firebaseapp.com",
    databaseURL: "https://gmcode-7ef9f.firebaseio.com",
    projectId: "gmcode-7ef9f",
    storageBucket: "gmcode-7ef9f.appspot.com",
    messagingSenderId: "11537638161",
    appId: "1:11537638161:web:b5da79ad45facfcdafe2b0",
    measurementId: "G-2B2CGB3P82"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.database().ref('contact')
