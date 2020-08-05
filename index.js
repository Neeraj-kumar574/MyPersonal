
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

 for (var i=0;i<numberOfDrumButtons;i++){


   document.querySelectorAll(".drum")[i].addEventListener("click", function (){

          var buttonInnerHTML = this.innerHTML;

        makesound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

   });

 }

document.addEventListener("keypress", function(event){
  makesound(event.key);

  buttonAnimation(event.key);

});

function makesound(key){

  switch (key) {
    case "N":
     var N=new Audio('sounds/N.mp3');
     N.play();
     break;
     default:console.log(buttonInnerHTML);

  }
}
function buttonAnimation(currentKey){
var activeButton =  document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

 setTimeout(function(){
   activeButton.classList.remove("pressed");
 },100);
}
