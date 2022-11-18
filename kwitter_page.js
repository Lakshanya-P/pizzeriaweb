var firebaseConfig = {
      apiKey: "AIzaSyDf6_k2ORx9mhUOaaOtotQYuzkiJ8_dxss",
      authDomain: "kwitter-e5e8d.firebaseapp.com",
      databaseURL: "https://kwitter-e5e8d-default-rtdb.firebaseio.com",
      projectId: "kwitter-e5e8d",
      storageBucket: "kwitter-e5e8d.appspot.com",
      messagingSenderId: "941353169598",
      appId: "1:941353169598:web:cf630eb9219ba8795864ef"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message: msg, 
            like: 0
      });

      document.getElementById("msg").value=" ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}