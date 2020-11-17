
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll("button")[i].addEventListener("click", function() {
  var buttonInner = this.innerHTML;
  soundKey(buttonInner);
  buttonaAnimation(buttonInner);

});
}


document.addEventListener("keypress", function(event){
  soundKey(event.key);
  buttonAnimation(event.key);
});




function soundKey(key){

  switch (key) {
    case "w":
    var tom1 =new Audio("D:/personal sites/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var tom2 =new Audio("D:/personal sites/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3 =new Audio("D:/personal sites/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":
    var tom4 =new Audio("D:/personal sites/Drum Kit Starting Files/Drum Kit Starting Files/sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j":
    var crash =new Audio("D:/personal sites/Drum Kit Starting Files/Drum Kit Starting Files/sounds/crash.mp3");
    crash.play();
    break;
    case "k":
    var kick =new Audio("D:/personal sites/Drum Kit Starting Files/Drum Kit Starting Files/sounds/kick-bass.mp3");
    kick.play();
    break;
    case "l":
    var snare =new Audio("D:/personal sites/Drum Kit Starting Files/Drum Kit Starting Files/sounds/snare.mp3");
    snare.play();
    break;

    default:
    break;

  }
}


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100);

}
