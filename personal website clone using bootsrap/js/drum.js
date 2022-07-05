for (let i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnnimation(buttonInnerHtml);
    });
}


document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    buttonAnnimation(event.key);
});


function makeSound(key)
{
    switch (key) {
        case "w":
            let tom1 = new Audio('drum_sound/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio('drum_sound/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('drum_sound/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio('drum_sound/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            let snare = new Audio('drum_sound/snare.mp3');
            snare.play();
            break;
        case "k":
            let crash = new Audio('drum_sound/crash.mp3');
            crash.play();
            break;
        case "l":
            let kick_bass = new Audio('drum_sound/kick-bass.mp3');
            kick_bass.play();
            break;
        default:
    }
}


function buttonAnnimation(currentKey)
{
    let activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    
}


