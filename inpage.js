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
  user_name =  localStorage.getItem("user_name");
  room_name =  localStorage.getItem("room_name");
function send() {
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name+"</h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";

like_button = "<input  id = "+firebase_message_id+" class='inpt' value='"+like+"'  onchange='updateLike(this.id)'>";
like = document.getElementsByClassName("inpt").value;
span_with_tag = "<span ></span>><hr>";
row = name_with_tag +message_with_tag +like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function updateLike(message_id) {
    console.log("clicked on ther like button - "+message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = likes;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes
    });
    
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = 'login.html';
}