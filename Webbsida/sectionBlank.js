window.addEventListener("load", myFunction)

function myFunction() {
    let blankAnimation = document.getElementById("blankAnimation");
    let sectionBlank = document.getElementById("sectionBlank");
    let databas = [
        "let blankAnimation = document.getElementById('blankAnimation');",
        "let fallingCodeArray = [];",
        "let time = 0;",
        "let update = setInterval(frame, 20)",
        "function frame() {",
        "let print= '';",
        "if(time==100)",
        "clearInterval(update);",
        "else {",
        "fallingCodeArray[time] = time;",
        "for(let x = 0; x < time; x++){",
        "print = print+fallingCodeArray[time];",
        "}",
        "blankAnimation.innerHTML = print;",
        "time++;",
        "}",
        "blankAnimation.innerHTML = print 'Welcome';",
        "time++;",
        "}",
        "blankAnimation.innerHTML = print 'WELCOME';",
        "time++;",
        "}",
        "blankAnimation.innerHTML = print 'WELCOME!!!!';",
        "time++;",
        "}",
        "blankAnimation.innerHTML = PLS print 'WELCOME!!!';",
        "}",];
    let finished = document.getElementById("finishedAnimation");
    let time = 0;
    let counter = 0;
    let print = "";
    let update = setInterval(frame, 130)
    function frame() {

        if (time == 27) {
            blankAnimation.style.backgroundColor = "rgb(255, 255, 255)";
            blankAnimation.innerHTML = "";
            blankAnimation.style.padding = 0;
            sectionBlank.style.backgroundColor = "rgb(255, 255, 255)"
            finished.style.display = "block";

            clearInterval(update);

        }
        else {
            if (time == 0) {
                blankAnimation.innerHTML = databas[time];
                time++;
            }else{
                if (counter>7){
                    for (let i = time - 7; i < time; i++) {
                        print = print + databas[i] + "<br>";   
                        
                    }
                    blankAnimation.innerHTML = print;
                    print = "";
                    time++
                }else{
                    for (let i = 0; i < time; i++) {
                        print = print + databas[i] + "<br>";   
                        
                    }
                    blankAnimation.innerHTML = print;
                    print = "";
                    time++
                    counter++
                }
                
            }
        }
    }
}