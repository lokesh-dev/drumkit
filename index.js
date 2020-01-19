for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{ 
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var btn=this.innerHTML;
        makesound(btn);
       btnpress(btn);
     });
}
document.addEventListener("keypress",function (event){makesound(event.key);
    btnpress(event.key);});
function makesound(btn){
    switch (btn) {
        case "w" :var audio=new Audio('sounds/tom-1.mp3');
        audio.play();
            
            break;
        case "a":var audio=new Audio('sounds/tom-2.mp3');
        audio.play();
            
           break;
        case "s":var audio=new Audio('sounds/tom-3.mp3');
        audio.play();
            
           break;
        case "d":var audio=new Audio('sounds/tom-4.mp3');
        audio.play();
            
          break;
        case "j":var audio=new Audio('sounds/kick-bass.mp3');
        audio.play();
            
          break;
        case "k":var audio=new Audio('sounds/crash.mp3');
        audio.play();
          
         break;
         case "l":var audio=new Audio('sounds/snare.mp3');
         audio.play();
          
          break;
        default:
            break;
    }

  }
  function btnpress(btn){

    var a=document.querySelector("."+ btn);
    a.classList.add("pressed");
    setTimeout(function(){
        a.classList.remove("pressed");
    },100);
  }

