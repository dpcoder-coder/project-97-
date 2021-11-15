const firebaseConfig = {
    apiKey: "AIzaSyAtOGMIQaM5o-l7FF4f-bk_L_N56wlLv18",
    authDomain: "kuchbhi-type-karo.firebaseapp.com",
    projectId: "kuchbhi-type-karo",
    storageBucket: "kuchbhi-type-karo.appspot.com",
    messagingSenderId: "791666972985",
    appId: "1:791666972985:web:914ca9aab5a7d9ba19f0e8",
    measurementId: "G-JWWB7LW0SD"
  };
    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });

          document.getElementById("msg").value = "";
    }
  const app = initializeApp(firebaseConfig); 
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room - " + Room_names);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message-h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

    row = name_with_tag + message_with_tag +like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
    });});}
getData();

function updateLike(message_id)

function redirectToRoomName(name)
{
    console.log(name)
    localStorage.setItem("room_name", name);
     window.location = "Chat_App_Page.html";
}

function logout() 
{
    locationStorage.removeItem("user_name");
    locationStorage.removeItem("room_name");
    window.location = "Chat_App.html";
}