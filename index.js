
for(var i=0; i<document.querySelectorAll(".drum").length ; i++){ //Adding event listener to all the buttons having class name drum .
    document.querySelectorAll('button')[i].addEventListener("click" , function (){ //For the event where the button is actually clicked.

        var buttonName = this.innerHTML; //Extracting the button number clicked/
        makeSound(buttonName); // Passing that number into the function 
        buttonAnimation(buttonName); //Passing the key into the button animation to animate the button
    });

    document.addEventListener("keypress", function(event) { // For the event where the key is pressed on keyboard.

        makeSound(event.key); //Passing the key pressed on the keyboard.
        buttonAnimation(event.key);//Passing the key into the button animation to animate the button

    });

    function makeSound(key){ // Main function that takes in the key pressed on keyboard or the button pressed.
        switch(key){ //Switch case that works on the basis of key passed
            case 'w':
                var laalHai = new Audio("sounds/laalhai.mp3"); //Audio is an inbuilt constructor function.
                laalHai.play(); //Play() is a method inside constructor function.
                document.querySelector('#title').innerHTML = "MEME Sound🎶Board";
                break;
    
            case 'a':
                var areVedya = new Audio("sounds/arevedya.mp3"); 
                areVedya.play(); 
                document.querySelector("#title").innerHTML = "MEME Sound🎶Board";
                break;
            
            case 's':
                var canonEvent = new Audio("sounds/canonevent.mp3");
                canonEvent.play();
                document.querySelector('#title').innerHTML = "Bro its a canon event 💀";
                break;
    
            case 'd':
                var kyaLaalHai = new Audio("sounds/kyalaalhai.mp3");
                kyaLaalHai.play();
                document.querySelector("#title").innerHTML = "MEME Sound🎶Board";
                break;
    
            case 'j':
                var johnCena = new Audio("sounds/johncena.mp3");
                johnCena.play();
                document.querySelector("#title").innerHTML = "MEME Sound🎶Board";
                break;
    
            case 'k':
                var burgir = new Audio("sounds/burgir.mp3");
                burgir.play();
                document.querySelector("#title").innerHTML = "MEME Sound🎶Board";
                break;
    
            case 'l':
                var kuchBhi = new Audio("sounds/kuchbhi.mp3");
                kuchBhi.play();
                document.querySelector("#title").innerHTML = "MEME Sound🎶Board";
                break;
    
            default:
                console.log("Not a valid input");
                break;
    }
}

function buttonAnimation(currentKey){  //The animation function 
    var activeButton = document.querySelector("." + currentKey); //Creating a variable active button that extracts the button by class name(current key)
    activeButton.classList.add("pressed"); // Adds the pressed class that is a state of button while key was pressed.

    /*Now when the pressed class is added the button stays the same forever after. To look like an animation we use timeout function to remove the pressed class
    from the button after 100ms for it to look like it was pressed */

    setTimeout(function() {  //setTimout takes two arguements, first is the function that has to be run after some time.
        activeButton.classList.remove("pressed");
    } , 100); //And second the amount of delay in ms, here its 100ms.
}

/* The functions which are directly passed into other like above, function(){code;} are anonymous functions. They have no name and
exist only inside that arguement. Generally when the function has less amount of code, we use anonymous functions. */

}
