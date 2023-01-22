
const start = document.querySelector("button[data-start]");
console.log(start);

const stop = document.querySelector("button[data-stop]");
console.log(stop);

let timeBac;

// color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

// слухачі 
start.addEventListener("click",continueChanging)
stop.addEventListener("click",stopInterval)
  


// general

// const timeBaC = setInterval(bakroundTime,1000)

// change
function bakroundTime () {
   const colors = getRandomHexColor()
 document.body.style.backgroundColor = colors
}

function continueChanging () {
    if (!timeBac) {
        timeBac = setInterval(bakroundTime,1000);
    }
     
}

function stopInterval () {
    clearInterval(timeBac);
    timeBac = null;
}