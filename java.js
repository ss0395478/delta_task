
function-shuffle-tiles55.js                                                                                                                                                     function shuffle2() {

    pause();
    reset();
    z=0;
    //Use nested loops to access each cell of the 5x5 grid
    for (var row=1;row<=5;row++) { //For each row of the 5x5 grid
       for (var column=1;column<=5;column++) { //For each column in this row
      
        var row2=Math.floor(Math.random()*5 + 1); //Pick a random row from 1 to 5
        var column2=Math.floor(Math.random()*5 + 1); //Pick a random column from 1 to 5
         
        changeTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells and it is same as
        // "swaptiles" function but name is changed as it was applying check function too
      } 
    }
    
    

    }
    function changeTiles(cell1,cell2) {
        var temp = document.getElementById(cell1).className;
        document.getElementById(cell1).className = document.getElementById(cell2).className;
        document.getElementById(cell2).className = temp;
      }

shuffle2();

stop-watch-practical.js

let startTime;
let elapsedTime;
let timerInterval;
let storedTime=0;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
    return ${formattedMM}:${formattedSS}:${formattedMS};
  }

  function pause() {
    storedTime= elapsedTime;
    clearInterval(timerInterval);
  }

  function reset() {
      print("00:00:00");
      storedTime=0;
      elaspedTime=0;
  }

function start() {
  startTime = Date.now();
  timerInterval =setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    if(storedTime!=0){
        elapsedTime=elapsedTime+storedTime;
    }
    let knowntime=timeToString(elapsedTime)
    print(knowntime);
  }, 10);
}




function print(txt) {
    document.getElementById("display").innerHTML = txt;
  }

grid-55-practical.js

let z=0;
let ro;
let co;
let che;
let startTime;
let elapsedTime;
let timerInterval;
let storedTime=0;
let number=7;
let turns=0;
let score;

show=document.getElementById("Audio");
show.style.display = "none";

function pause() {
  storedTime= elapsedTime;
  clearInterval(timerInterval);
}

function check(){
  for(ro=2;ro<=4;ro=ro+1)
  {

    for(co=2;co<=4;co=co+1)
      {
        che="tile"+number;
        
        if ( document.getElementById("cell"+ro+co).className==che)
          {
            if((ro==4)&&(co==4))
            {
              pause();
              document.getElementById("Myresult").innerHTML = "number of turns you used are : " + turns;
              document.getElementById("table").innerHTML = ".........................................GAME OVER..............................................";
            }
            
            
          }  
        else
        {
          break;
        } 

        

        number=number+1;
        
          

      }

    

    number=number+2;
      
    


  }

} 


function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(3, "0");
    let formattedHH = hh.toString().padStart(2, "0");
    return ${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS};
  }

  

  function reset() {
      print("00:00:00:00");
      storedTime=0;
      elaspedTime=0;
  }

function start() {
  startTime = Date.now();
  timerInterval =setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    if(storedTime!=0){
        elapsedTime=elapsedTime+storedTime;
    }
    let knowntime=timeToString(elapsedTime)
    print(knowntime);
  }, 10);
}




function print(txt) {
    document.getElementById("display").innerHTML = txt;
  }

function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;

    turns=turns+1;
    check();
    number=7;
    

    
  }
  
  function shuffle() {
  
  for (var row=1;row<=5;row++) { 
     for (var column=1;column<=5;column++) { 
    
      var row2=Math.floor(Math.random()*5 + 1); 
      var column2=Math.floor(Math.random()*5 + 1); 
       
      swapTiles("cell"+row+column,"cell"+row2+column2); 
    } 
  } 
  }
  
  function clickTile(row,column) {
    
    if(z==0)
    {
        start();
        z++;
    }
    
    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;
    if (tile!="tile25") { 
         
         if (column<5) {
           if ( document.getElementById("cell"+row+(column+1)).className=="tile25") {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             return;
           }
         }
         
         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="tile25") {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             return;
           }
         }
           
         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="tile25") {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }
         
         if (row<5) {
           if ( document.getElementById("cell"+(row+1)+column).className=="tile25") {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         } 
    }  
    
  }


  function blockwhite() {
    if(document.getElementById("cell54").className=="tile"+2+4)
    {
      pause();
    }
  }