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

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";

function addroom(){
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});

localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });
});
}

getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}