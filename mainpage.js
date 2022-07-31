const firebaseConfig = {
    apiKey: "AIzaSyDl2klvgHBg9SJookvz0L0rXiFw6EGZ9Rw",
    authDomain: "project-97-80f75.firebaseapp.com",
    databaseURL: "https://project-97-80f75-default-rtdb.firebaseio.com",
    projectId: "project-97-80f75",
    storageBucket: "project-97-80f75.appspot.com",
    messagingSenderId: "60106403121",
    appId: "1:60106403121:web:e7c2f4c860048f043d5410"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom() {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
      purpose:"addingRoomname"
     });
    localStorage.setItem("room_name",room_name);
    window.location = "inpage.html";
      
}


function getData()
 {firebase.database().ref("/").on('value', function(snapshot)
  {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot)
   {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name is " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;



      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
 window.location = "inpage.html";
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "login.html";
}