let lifeForce;
let cash;
let debt;

console.log(debt);


const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#continue-btnn");

const text = document.querySelector('#text');
const lifeForceText = document.querySelector("#lifeForceText");
const cashText = document.querySelector("#cashText");
const debtText = document.querySelector("#debtText");

//callback function initializing buttons (assigning refrence of the function not the function call itself)

button1.onclick = summerJob;
button2.onclick = chill;


// button1.onclick = cheapLaptop;
// button2.onclick = midLaptop;
// button3.onclick = expensiveLaptop;

// function summerJob() {
//     button1.innerText = "Get a summer job and save as much as possible.";
//     button2.innerText = "Sleep, Eat, Party, Repeat!";
//     button3.innerText = "Fight dragon";
//     button1.onclick = summerJob;
//     button2.onclick = chill;
//     text.innerText = "Great! Saving as much as you can before you start college one of the best things you can do to set yourself up for success.";
  
//   }

function summerJob() {
  button1.innerText = '11" Ideapad. $250';
  button2.innerText = "Sleep, Eat, Party, Repeat!";
  button1.onclick = summerJob;
  button3.innerText = "Fight dragon";
  
  button2.onclick = chill;
  text.innerText = "You are going to need a laptop. You can get an affordable one for as low as $250 but it may not do all that you need it to do.";
  console.log("Earns money during the summer.")

}

function chill() {
    button1.innerText = "Get a summer job and save as much as possible.";
    button2.innerText = "Sleep, Eat, Party, Repeat!";
    button3.innerText = "Fight dragon";
    button1.onclick = summerJob;
    button2.onclick = chill;
    text.innerText = "Carpe diem!";
    console.log("Chills all summer.");
  
  }

  function cheapLaptop() {
    button1.innerText = "Get a summer job and save as much as possible.";
    button2.innerText = "Sleep, Eat, Party, Repeat!";
    button1.onclick = summerJob;
    button3.innerText = "Fight dragon";
    
    button2.onclick = chill;
    text.innerText = "Great! Saving as much as you can before you start college one of the best things you can do to set yourself up for success.";
    console.log("Earns money during the summer.")
  
  }
  
  function midLaptop() {
      button1.innerText = "Get a summer job and save as much as possible.";
      button2.innerText = "Sleep, Eat, Party, Repeat!";
      button3.innerText = "Fight dragon";
      button1.onclick = summerJob;
      button2.onclick = chill;
      text.innerText = "Carpe diem!";
      console.log("Chills all summer.");
    
    }

    function expensiveLaptop() {
        button1.innerText = "Get a summer job and save as much as possible.";
        button2.innerText = "Sleep, Eat, Party, Repeat!";
        button3.innerText = "Fight dragon";
        button1.onclick = summerJob;
        button2.onclick = chill;
        text.innerText = "Carpe diem!";
        console.log("Chills all summer.");
      
      }