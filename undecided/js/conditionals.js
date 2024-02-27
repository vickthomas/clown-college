let lifeForce = 0;
let cash;
let debt = 0;
let currentMajor = 0

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#continue-btnn");

const text = document.querySelector('#text');
const lifeForceText = document.querySelector("#lifeForceText");
const cashText = document.querySelector("#cashText");
const debtText = document.querySelector("#debtText");

const majors = [
    { name: 'Accounting', power: 5 },
    { name: 'Business Administration', power: 30 },
    { name: 'Information Technology', power: 50 },
    { name: 'Psychology', power: 100 }
];

const financialAid = [
    { name: 'churchScholarship', power: 5 },
    { name: 'stateGrant', power: 30 },
    { name: 'fundationScholatship', power: 50 },
    { name: 'privateScholarship', power: 100 }
  ];


//callback function initializing buttons (assigning refrence of the function not the function call itself)

// button1.onclick = summerJob;
// button2.onclick = chill;


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




const lifeEvents = [
    {
        name: "pre college",
        "button text": ["Get a summer job and save as much as possible.", "Volunteer with a worthy cause"],
        "button functions": [summerJob, chill, volunteer],
        text: "This is the summer you have been waiting for! You're 18, your parents have loosen the reigns. How do you plan to spend it?"
     
    },
    
    {
        name: "buy laptop",
        "button text": ['11" Ideapad. $250', '13" HP. $750', '13" Macbook Pro + Apple Care $2500'],
        "button functions": [cheapLaptop, midLaptop, expensiveLaptop],
        text: "You are going to need a laptop. You can get an affordable one for as low as $250 but it may not do all that you need it to do."
     
    },
    {
        name: "obtain books",
        "button text": ["Rent Books $300", "Buy Used $450", "Buy New $585"],
        "button functions": [rentBooks, buyUsedBooks, buyNewBooks],
        text: "You will need text books for class and they are not cheap. Secure your books."
     
    },

    {
        name: "bestie bday",
        "button text": ["Schedule a really long Facetime with them to catch up.", "Send them a care package with a nice t-shirt and their favorite snacks. $60", "Road Trip!"],
        "button functions": [faceTime, sendCarePackage, roadTrip],
        text: "Your bestie is attending school out-of-state. Their birthday is coming up and you really miss them. How are you going to acknowledge them?"
     
    },
    {
        name: "lose",
        "button text": ["TRY AGAIN", "TRY AGAIN", "TRY AGAIN"],
        "button functions": [restart, restart, restart],
        text: "As a general rule, your debt burden should be less than your starting salary when you graduate."
    },
    { 
        name: "win", 
        "button text": ["PLAY", "PLAY", "PLAY?"], 
        "button functions": [start, restart, go], 
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" 
      }, 

      
      
      {
        name: "financial aid",
        "button text": ["Get a job or increase hours at work", "Take out even more student loans.", "Ahh! Go talk to the financial aid office even though you hate going in there."],
        "button functions": [workMore, ,moreStudentLoans, seeFinancialAid],
        text: "Terrible news: Your parent got a raise, but now they make too much money to qualify for all of your original financial aid (but not enough that they can pay for it). How are you going to cover the rest of your tuition?"
      },

   

]

button1.onclick = summerJob;
button2.onclick = chill;
button3.onclick = volunteer;

function update(lifeEvent) {
    // monsterStats.style.display = "none";
    button1.innerText = lifeEvent["button text"][0];
    button2.innerText = lifeEvent["button text"][1];
    button3.innerText = lifeEvent["button text"][2];
    button1.onclick = lifeEvent["button functions"][0];
    button2.onclick = lifeEvent["button functions"][1];
    button3.onclick = lifeEvent["button functions"][2];
    text.innerHTML = lifeEvent.text;
  }

  
 
  function summerJob() {
    cash += 3000;
    lifeForce += 20;
    cashText.innerText = cash;
    lifeForce.innerText = lifeForce;
    console.log("Earns $3000 during the summer before college.");
}

function chill() {
    debt += 200;
    lifeForce -= 10;
    debtText.innerText = debt;
    lifeForce.innerText = lifeForce;
    console.log("Hope you had fun, living la vida loca this summer may not have been the best choice. Your learning has regressed a bit. You picked up some bad habits and racked up a small amount of debt.");
}

function volunteer() {
    lifeForce += 20;
    cash += 100;
    cashText.innerText = cash;
    lifeForce.innerText = lifeForce;
    console.log("Voluteering was such a great idea. While you did not earn a lot money, you made a couple of friends, great connections, gained a ton of experience, and great references for future opportunities.");
}

function cheapLaptop() {
    debt += 250;
    lifeForce += 10;
    debtText.innerText = debt;
    lifeForceText.innerText = lifeForce;
}

function midLaptop() {
    debt += 750;
    lifeForce += 10;
    debtText.innerText = debt;
    lifeForceText.innerText = lifeForce;
}

function expensiveLaptop() {
    debt += 2500;
    lifeForce += 5;
    debtText.innerText = debt;
    lifeForceText.innerText = lifeForce;
}

function faceTime() {
    lifeForce += 5;
    cash += 25;   
    lifeForceText.innerText = lifeForce;
    cashText.innerText = cash;
    console.log("Kudos to you! You managed to make your friend feel really special. And it's just your luck that as soon as you hung up you got notified that you won the $25 Visa gift card from the Office of Student Life. ")
}

function sendCarePackage() {
    cash -= 60;
    lifeForce += 5;
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;
    console.log("Aww! Your friend feels so loved.")
}

function roadTrip() {
    cash -= 500;
    lifeForce += 10;
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;
    console.log("You had budgeted $200 for the trip, but you guys were having so much fun, plus you are hard working college students why cheat yourself - treat yourself!")
}

function changeMajor() {
    if (currentMajor < majors.length - 1) {
      if (go >= 30) {
        gold -= 30;
        currentMajor++;
        goldText.innerText = gold;
        let newMajor = majors[currentMajor].name;
        text.innerText = "You were majoring in " + currentMajor + "projected to make a starting salary of " + "Now you are majoring in " newWeapon + ".";
        inventory.push(newWeapon);
      } else {
        text.innerText = "Based on your current trajectory and debt load, it is ill advised for you to change your major now. Just choose regret.";
      }
    } else {
      text.innerText = "You have a very high earning major and are doing well powerful weapon!";
      button2.innerText = "Regret Major";
      button2.onclick = sellWeapon;
    }
  }

  function sellWeapon() {
    if (inventory.length > 1) {
      gold += 15;
      goldText.innerText = gold;
      let currentWeapon = inventory.shift();
      text.innerText = "You sold a " + currentWeapon + ".";
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "Don't sell your only weapon!";
    }
  }

 

function workMore() {
    cash+= 2000;
    lifeForce -= 30;
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;

}

function regretMajor() {

}

function procrastinate () {

}

function moreStudentLoans() {
    debt+= 5000;
    lifeForce -= 20;
    debtText.innerText = debt;
    lifeForceText.innerText = lifeForce;
}






// function summerJob() {
//   //chage text of buttons
//   button1.innerText = '11" Ideapad. $250',
//   button2.innerText = '13" HP. $750';
//   button3.innerText = '13" Macbook Pro + Apple Care $2500';
//   //reset button functions
//   button1.onclick = cheapLaptop;
//   button2.onclick = midLaptop;
//   button3.onclick = expensiveLaptop;
//   text.innerText = "You are going to need a laptop. You can get an affordable one for as low as $250 but it may not do all that you need it to do.";
//   console.log("Earns money during the summer.")

// }

// function chill() {
//   button1.innerText = '11" Ideapad $250';
//   button2.innerText = '13" HP $750';
//   button3.innerText = '13" Macbook Pro + Apple Care $2500';
//   button1.onclick = cheapLaptop;
//   button2.onclick = midLaptop;
//   button3.onclick = expensiveLaptop;
//   text.innerText = "You are going to need a laptop. You can get an affordable one for as low as $250 but it may not do all that you need it to do.";
//   console.log("Earns money during the summer.")
  
//   }

  //Year 1

  //Use objects to store majors

//   function cheapLaptop() {
//     button1.innerText = 'Rent Books $300 ';
//     button2.innerText = 'Buy Used $450';
//     button3.innerText = 'Buy New $585';
//     button1.onclick = rentBooks;
//     button2.onclick = usedBooks;
//     button3.onclick = newBooks;
//     text.innerText = "You need to buy textbooks - and they are not cheap";
//     console.log("Earns money during the summer.")
  
//   }
  
//   function midLaptop() {
//     button1.innerText = 'Rent Books $300 ';
//     button2.innerText = 'Buy Used $450';
//     button3.innerText = 'Buy New $585';
//     button1.onclick = rentBooks;
//     button2.onclick = usedBooks;
//     button3.onclick = newBooks;
//     text.innerText = "You need to buy textbooks - and they are not cheap";
//     console.log("Earns money during the summer.")
    
//     }

//     function expensiveLaptop() {
//         button1.innerText = 'Rent Books $300 ';
//         button2.innerText = 'Buy Used $450';
//         button3.innerText = 'Buy New $585';
//         button1.onclick = rentBooks;
//         button2.onclick = usedBooks;
//         button3.onclick = newBooks;
//         text.innerText = "You need to buy textbooks - and they are not cheap";
//         console.log("Earns money during the summer.")
//       }

    
    // function rentBooks() {
    //     button1.innerText = 'Rent Books $300 ';
    //     button2.innerText = 'Buy Used $450';
    //     button3.innerText = 'Buy New $585';
    //     button1.onclick = rentBooks;
    //     button2.onclick = usedBooks;
    //     button3.onclick = newBooks;
    //     text.innerText = "You need to buy textbooks - and they are not cheap";
    //     console.log("Earns money during the summer.")
    //   }

    //   function usedBooks() {
    //     button1.innerText = 'Rent Books $300 ';
    //     button2.innerText = 'Buy Used $450';
    //     button3.innerText = 'Buy New $585';
    //     button1.onclick = rentBooks;
    //     button2.onclick = usedBooks;
    //     button3.onclick = newBooks;
    //     text.innerText = "You need to buy textbooks - and they are not cheap";
    //     console.log("Earns money during the summer.")
    //   }

    //   function newBooks() {
    //     button1.innerText = 'Rent Books $300 ';
    //     button2.innerText = 'Buy Used $450';
    //     button3.innerText = 'Buy New $585';
    //     button1.onclick = rentBooks;
    //     button2.onclick = usedBooks;
    //     button3.onclick = newBooks;
    //     text.innerText = "You need to buy textbooks - and they are not cheap";
    //     console.log("Earns money during the summer.")
    //   }

      //since we have repitition in our code this is a sign that we need another functions. functions can take param - values given each time it it run 
    
      //function that will use data from the (wwyd) arguments that is passed into it 


    //   function update(wwyd) {

    //   };

      //object that 

    //   const wwyds = [
        
    
    // {
    //     name: "bestie bday",
    //     "button text": [
    //         "Schedule a really long Facetime with them to catch up.", 
    //         "Send them a care package with a nice t-shirt and their favorite snacks. $50", 
    //         "Road trip!."
    //     ],
    //     "button functions": [
    //         facetime,
    //         sendCarePackage,
    //         roadTrip
    //     ],
    //     text: "Your bestie is attending school out-of-state. Their birthday is coming up and you really miss them. How are you going to acknowledge them?"
    // },


    // ];




     //points for above conditionals 
     //hide buttons 
     //assign mascot (fix random generator)
     //formatting

      //getElementById()
      //getElementByClassName()
      //getElementByTagName()
      //Switch