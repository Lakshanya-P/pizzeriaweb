var firebaseConfig = {
      apiKey: "AIzaSyBT3CFusO3P6iY8SLFVemK4ZcZctJSoySg",
      authDomain: "kwitter-dd58e.firebaseapp.com",
      databaseURL: "https://kwitter-dd58e-default-rtdb.firebaseio.com",
      projectId: "kwitter-dd58e",
      storageBucket: "kwitter-dd58e.appspot.com",
      messagingSenderId: "5028224236",
      appId: "1:5028224236:web:213bcb3fb272ebb05dd9c9"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

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