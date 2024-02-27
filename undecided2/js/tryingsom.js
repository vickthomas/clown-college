let lifeForce = 0;
let cash = 0;
let debt = 0;
let currentMajor = 0

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const  lifeForceText = document.querySelector("#lifeForceText");
const cashText = document.querySelector("#cashText");
const debtText = document.querySelector("#debtText");

const homes = [
    {
        name: "pre college",
        "button text": ["Get a summer job and save as much as possible.", "Sleep, Eat, Party, Repeat!", "Volunteer for a worthy cause"],
        "button functions": [summerJob, chill, volunteer],
        text: "This is the summer you have been waiting for! You're 18, your parents have loosen the reigns. How do you plan to spend it?"
     
    }
    // {
    //     name: "buy laptop",
    //     "button text": ['11" Ideapad. $250', '13" HP. $750', '13" Macbook Pro + Apple Care $2500'],
    //     "button functions": [cheapLaptop, midLaptop, expensiveLaptop],
    //     text: "You are going to need a laptop. You can get an affordable one for as low as $250 but it may not do all that you need it to do."
     
    // },
    // {
    //     name: "obtain books",
    //     "button text": ["Rent Books $300", "Buy Used $450", "Buy New $585"],
    //     "button functions": [rentBooks, buyUsedBooks, buyNewBooks],
    //     text: "You will need text books for class and they are not cheap. Secure your books."
     
    // },
    // {
    //     name: "bestie bday",
    //     "button text": ["Schedule a really long Facetime with them to catch up.", "Send them a care package with a nice t-shirt and their favorite snacks. $60", "Road Trip!"],
    //     "button functions": [faceTime, sendCarePackage, roadTrip],
    //     text: "Your bestie is attending school out-of-state. Their birthday is coming up and you really miss them. How are you going to acknowledge them?"
     
    // },
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

button1.onclick = summerJob;
button2.onclick = chill;
button3.onclick = volunteer;

function update(home) {
    
    button1.innerText = home["button text"][0];
    button2.innerText = home["button text"][1];
    button3.innerText = home["button text"][2];
    button1.onclick = home["button functions"][0];
    button2.onclick = home["button functions"][1];
    button3.onclick = home["button functions"][2];
    text.innerHTML = home.text;
}

function summerJob() {
    update(homes[0]);
    cash += 3000;
    lifeForce += 20;
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;
    console.log("Earns $3000 during the summer before college.");
}

function chill() {
    update(homes[1]);
    debt += 200;
    lifeForce -= 10;
    debtText.innerText = debt;
    lifeForceText.innerText = lifeForce;
    console.log("Hope you had fun, living la vida loca this summer may not have been the best choice. Your learning has regressed a bit. You picked up some bad habits and racked up a small amount of debt.");
}
  
function volunteer() {
    update(homes[2]);
    lifeForce += 20;
    cash += 100;
    cashText.innerText = cash;
    lifeForceText.innerText = lifeForce;
    console.log("Volunteering was such a great idea. While you did not earn a lot of money, you made a couple of friends, great connections, gained a ton of experience, and great references for future opportunities.");
}