
/* document.getElementById("blankAnimation").addEventListener("load", myFunction)
 */
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
    let finished = document.getElementById("finishedAnimation") ;
    let time = 0;
    let time2 = 0;
    let update = setInterval(frame, 100)
    function frame() {
        
        if (time == 27){
            blankAnimation.style.paddingLeft = 0;
            blankAnimation.innerHTML = "WELCOME!";  
            blankAnimation.style.fontSize = 65 + "px";
            blankAnimation.style.textAlign = "center";
            blankAnimation.style.paddingTop = 15 + "px";
            

            if (time2 == 10){
                
                blankAnimation.style.backgroundColor = "rgb(255, 255, 255)";
                blankAnimation.innerHTML = "" ;
                blankAnimation.style.padding = 0;
                sectionBlank.style.backgroundColor = "rgb(255, 255, 255)"
                finished.style.display = "block";
                
                clearInterval(update);
                
                
                
            }else{
                if (time2 % 2 == 1){
                    blankAnimation.style.color = "rgb(102, 255, 51)";
                    time2++
                }else{
                    blankAnimation.style.color = "rgb(255, 102, 153)";
                    time2++
                }
            }
        }
        else {
            if (time == 0) {
                blankAnimation.innerHTML = databas[time];
                time++;
            }
            else if (time == 1) {
                blankAnimation.innerHTML =  databas[time - 1] + "<br>" + 
                                            databas[time];
                time++;
            } else if (time == 2) {
                blankAnimation.innerHTML =  databas[time - 2] + "<br>" + 
                                            databas[time - 1] + "<br>" + 
                                            databas[time]  ;
                time++;
            } else if (time == 3) {
                blankAnimation.innerHTML =  databas[time - 3] + "<br>" + 
                                            databas[time - 2] + "<br>" + 
                                            databas[time - 1] + "<br>" +
                                            databas[time] ;
                time++;
            } else if (time == 4) {
                blankAnimation.innerHTML =  databas[time - 4] + "<br>" +
                                            databas[time - 3] + "<br>" + 
                                            databas[time - 2] + "<br>" + 
                                            databas[time - 1] + "<br>" +
                                            databas[time] ;
                time++;
            } else if (time == 5) {
                blankAnimation.innerHTML =  databas[time - 5] + "<br>" +
                                            databas[time - 4] + "<br>" +
                                            databas[time - 3] + "<br>" + 
                                            databas[time - 2] + "<br>" + 
                                            databas[time - 1] + "<br>" +
                                            databas[time] ;
                time++;
            } else if (time == 6) {
                blankAnimation.innerHTML =  databas[time - 6] + "<br>" +
                                            databas[time - 5] + "<br>" +
                                            databas[time - 4] + "<br>" +
                                            databas[time - 3] + "<br>" + 
                                            databas[time - 2] + "<br>" + 
                                            databas[time - 1] + "<br>" +
                                            databas[time] ;
                time++;
            } else {
                blankAnimation.innerHTML =  databas[time - 7] + "<br>" +
                                            databas[time - 5] + "<br>" +
                                            databas[time - 4] + "<br>" +
                                            databas[time - 3] + "<br>" + 
                                            databas[time - 2] + "<br>" + 
                                            databas[time - 1] + "<br>" +
                                            databas[time] ;
                time++;
            }

        }
    }

   
 /*    function frame2(){
        blankAnimation.innerHTML = "WELCOME!";  
        blankAnimation.style.fontSize = 40 + "px";
        let time2 = 0;

        if (time2 == 7){
            clearInterval(update2);

        }else{
            if (time2 == 0 || time2 == 3 || time2 == 5){
                blankAnimation.style.color = "rgb(102, 255, 51)";
                time2++
            }else{
                blankAnimation.style.color = "rgb(255, 102, 153)";
                time2++
            }
        } */

        
        /* for (let i = 0; i <=6; i++){
            if (i == 0 || i == 3 || i == 5){
                blankAnimation.style.fontSize = 40 + "px";
                blankAnimation.style.color = "rgb(102, 255, 51)";
                blankAnimation.innerHTML = "WELCOME!";
            }else if (i == 2 || i == 4){
                blankAnimation.style.fontSize = 40 + "px";
                blankAnimation.style.color = "rgb(255, 102, 153)";
                blankAnimation.innerHTML = "WELCOME!";
            }else{
                blankAnimation.innerHTML = "slut";
            }
            
        }
    } */

   
}