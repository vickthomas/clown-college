let lifeForce = 0;
let cash = 0;
let debt = 0;
let currentMajor = 0
let currentSupply = 0;

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const  lifeForceText = document.querySelector("#lifeForceText");
const cashText = document.querySelector("#cashText");
const debtText = document.querySelector("#debtText");

const supplies = [
    { name: "Color Printer", power: 5 },
    { name: "iPad", power: 30 },
    { name: "300 worth of school swag", power: 50 },
    { name: "Door Dash Pass worth $300", power: 100 }
];

const homes = [
    {   
        name: "summer1",
        "button text": ["Get a summer job and save as much as possible.", "Sleep, Eat, Party, Repeat!", "Volunteer for a worthy cause"],
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
        "button text": ["Rent Books $240", "Buy Used $350", "Buy New $585"],
        "button functions": [rentBooks, buyUsedBooks, buyNewBooks],
        text: "You will need text books for class and they are not cheap. Secure your books."
     
    },
    {
        name: "Year 1",
        "button text": ["Live with parents", "Live on campus", "Share an apartment with a roommate "],
        "button functions": [onCampus, withParents, offCampus],
        text: "School is starting, oh we forgot, are you what are you doing about housing?."
     
    },
    {
        name: "Class",
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
        name: "refund",
        "button text": ["Buy the dip", "Put $500 in my checking account and save the rest for a rainy day.", " I have been meaning to buy a couple of items."],
        "button functions": [bitCoin, payDownLoans, buySupplies],
        text: "Cha-ching! Your $3000 student loan refund had just hit your account."
      },
    // {
    //     name: "lose",
    //     "button text": ["TRY AGAIN", "TRY AGAIN", "TRY AGAIN"],
    //     "button functions": [restart, restart, restart],
    //     text: "As a general rule, your debt burden should be less than your starting salary when you graduate."
    // },
    // { 
    //     name: "win", 
    //     "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    //     "button functions": [restart, restart, restart], 
    //     text: " YOU WIN THE GAME!" 
    //   }, 
    //   {
    //     name: "financial aid",
    //     "button text": ["Get a job or increase hours at work", "Take out even more student loans.", "Ahh! Go talk to the financial aid office even though you hate going in there."],
    //     "button functions": [workMore, ,moreStudentLoans, seeFinancialAid],
    //     text: "Terrible news: Your parent got a raise, but now they make too much money to qualify for all of your original financial aid (but not enough that they can pay for it). How are you going to cover the rest of your tuition?"
    //   },

]

button1.onclick = start;
button2.onclick = start;
button3.onclick = start;

function update(home) {
    
    button1.innerText = home["button text"][0];
    button2.innerText = home["button text"][1];
    button3.innerText = home["button text"][2];
    button1.onclick = home["button functions"][0];
    button2.onclick = home["button functions"][1];
    button3.onclick = home["button functions"][2];
    text.innerHTML = home.text;
}

function preCollege() {
    update(homes[0]);
  }

function start() {
    lifeForce = 0;
    cash = 0;
    debt = 0;
    lifeForceText.innerText = lifeForce;
    cashText.innerText = cash;
    debtText.innerText = debt;
    preCollege();
}

function summerJob() {
    update(homes[1]);
    cash += 3000;
    lifeForce += 20;
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;
    console.log("Earns $3000 during the summer before college.")
    
}

function chill() {
    update(homes[1]);
    lifeForce -= 10;
    debt += 200;
    debtText.innerText = debt;
    lifeForceText.innerText = lifeForce;
    console.log("Hope you had fun, living la vida loca this summer may not have been the best choice. Your learning has regressed a bit. You picked up some bad habits and racked up a small amount of debt.");
}
  
function volunteer() {
    update(homes[1]);
    lifeForce += 20;
    cash += 100;
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;
    console.log("Volunteering was such a great idea. While you did not earn a lot of money, you made a couple of friends, great connections, gained a ton of experience, and great references for future opportunities.");
}

function cheapLaptop() {
    update(homes[2]);
    debt += 250;
    lifeForce += 10;
    debtText.innerText = debt;
    lifeForceText.innerText = lifeForce;
}

function midLaptop() {
    update(homes[2]);
    debt += 750;
    lifeForce += 10;
    debtText.innerText = debt;
    lifeForceText.innerText = lifeForce;
}

function expensiveLaptop() {
    update(homes[2]);
    debt += 2500;
    lifeForce += 5;
    debtText.innerText = debt;
    lifeForceText.innerText = lifeForce;
}

function bitCoin() {
    update(homes[2]);
    cash += 1000;
    lifeForce += 5;
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;
}
function payDownLoans() {
    update(homes[2]);
    debt += 3000;
    lifeForce += 30;
    debtText.innerText = debt;
    lifeForceText.innerText = lifeForce;
}

function buySupplies() {
    if (currentSupply < Supplies.length - 1) {
      if (cash >= 100 && debt < 20000) {
        cash -= 100;
        currentSupply++;
        cashText.innerText = cash;
        let newSupply = supplies[currentSupply].name;
        text.innerText = "You now have a " + newSupply + ".";
        inventory.push(newSupply);
        text.innerText += " Don't forget about you have all of these supplies : " + inventory;
      } else {
        text.innerText = "Insufficient Funds.";
      }
    } else {
      text.innerText = "What more can you want from me?! (In my Tyrese voice)";
      button2.innerText = "Sell supplies to make some moolah";
      button2.onclick = sellSupplies;
    }
  }

  function sellSupplies() {
    if (inventory.length > 1) {
      cash += 150;
      cashText.innerText = cash;
      let currentSupply = inventory.shift();
      text.innerText = "You sold a " + currentSupply + ".";
      text.innerText += " In your possession you have: " + inventory;
    } else {
      text.innerText = "Don't sell everthang!";
    }
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



function onCampus() {
    lifeForce += 30;
    cash -= 200;
    debt += 13,260;
    lifeForceText.innerText = lifeForce;
    cashText.innerText = cash;
    debtText.innerText = debt;
    
    console.log("Congratulations! Living on campus will be an amazing experience, and studies show that first year students who live on campus fare much better than their counterparts who opt out!")
}

function withParents() {
    cash -= 500;
    lifeForce += 10;
    debt +=
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;
    debtText.innerText = debt;
    console.log("Living at home is a great way to save money and stay focused on your goals. Just be sure to get to know your professors and get involved on campus.")
}

function offCampus() {
    debt +=
    cash -= 500;
    lifeForce += 10;
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;
    debtText.innerText = debt;
    console.log("You had budgeted $200 for the trip, but you guys were having so much fun, plus you are hard working college students why cheat yourself - treat yourself!")
}

function rentBooks() {
    update(homes[3]);
    cash -= 240;
    lifeForce += 10;
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;
    console.log("Renting is usually the cheapest, but make sure you do not write in, damage, or lose the book, or miss the deadline to return it or you will be subject to more fees.")

}

function buyUsedBooks() {
    update(homes[3]);
    cash -= 350;
    lifeForce += 5;
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;
    console.log("Buying used is a affordable option - you can markup the book or refrence it whenever you like, you can even try selling it or donating it to a freind or underclassmen.")
}

function buyNewBooks() {
    update(homes[3]);
    cash -= 585;
    lifeForce -= 5;
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;
    console.log("Okay big spender, you have no excuse now not to complete your reading!")

}

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");




  
// function summerJob() {
    
// }

// function chill() {
//     debt += 200;
//     lifeForce -= 10;
//     debtText.innerText = debt;
//     lifeForce.innerText = lifeForce;
//     console.log("Hope you had fun, living la vida loca this summer may not have been the best choice. Your learning has regressed a bit. You picked up some bad habits and racked up a small amount of debt.");
// }

// function volunteer() {
//     lifeForce += 20;
//     cash += 100;
//     cashText.innerText = cash;
//     lifeForce.innerText = lifeForce;
//     console.log("Voluteering was such a great idea. While you did not earn a lot money, you made a couple of friends, great connections, gained a ton of experience, and great references for future opportunities.");
// }