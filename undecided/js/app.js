/* 
create variables
game board
create the snake
make the snake move in one direction
change directions
make food
make food randomly generate
what happens when snake touches food 
what happens after (snake grows) (points)
save scores
how to end games
reset or start game


Decisions
In this project, knowledge of how decisions should be utilized in code will be illustrated with proper use of: 
If, then statements
If, else statements
Switch
DOM Manipulation
In this project, DOM Manipulation will be utilized in multiple ways. Proper use of this structure will show the coder understands the following: (resource)
What it is
How to select elements
getElementById()
getElementByClassName()
getElementByTagName()
How to select elements with CSS Selectors
querySelector()

*/
// let focus = 50;
// let connections = 20;
// let savings = 0;
// let debt = 0;


// Outcome: {
//     
//     label: 'No Way',
//     message: 'You\'ll incur much less debt and start earning earlier, but you might find yourself under-qualified for many positions.',
//     
//     OutcomeValues: [{
//         Value: {
//             label: 'Connections',
//             amount: -100
//         }
//     }]
// }
// }

// Pre-College

//assign criteria 

//write if/thens or random generator 

//need the values in gpa, extracurricular, and home state

//convert it to application results based on established criteria using if/thens

//show results 

//startgame button

const startGame = document.getElementById('startGameBtn');

//add smurf once start game is clicked to clear intro menu

startGame.addEventListener('click', switchContent)

function switchContent() {
    let introContainer = document.getElementById('intro')

    introContainer.innerHTML = '';

    let applyContainer = document.createElement('div')




}

//smurf setup to apply on click
document.querySelector('#applyBtn').addEventListener('click', apply)

//grab the values out of every input and store them in variables
function apply() {
    const gpa = document.querySelector('#gpa')
    const extracurricular = document.querySelector('#extracuricular')
    const state = document.querySelector('#state')

    const playerSelections = `${gpa} ${extracuricular} ${state}`
    
    console.log(playerSelections)
}

apply()


//clear the screen and display admission offers

const applyBtn = document.getElementById('applyBtn')

//add smurf to listen for a



//create and array of objects for school profiles



//random generator for school mascot based on user institution selection 

let commonSchools = ['Bengals', 'Buffalos', 'Broncos', 'Colts', 'Cowboys', 'Chargers', 'Raiders', 'Rams', 'Seahawks', 'Saints', 'Steelers'];

let inStatePublicColleges = commonSchools.filter(school => school[0]=='B');

let outOfStatePublicColleges = commonSchools.filter(school => school[0]=='C');

let privateColleges = commonSchools.filter(school => school[0]=='R');

let communityColleges = commonSchools.filter(school => school[0]=='S');

//random generator

let inStatePublicCollegesIdx = Math.floor(Math.random() * inStatePublicColleges.length);

let outOfStatePublicCollegesIdx = Math.floor(Math.random() * outOfStatePublicColleges.length);

let privateCollegesIdx = Math.floor(Math.random() * privateColleges.length);

let communityCollegesIdx = Math.floor(Math.random() * communityColleges.length);

console.log(communityCollegesIdx);

let inStatePublic = inStatePublicColleges[inStatePublicCollegesIdx];

let outOfStatePublic = outOfStatePublicColleges[outOfStatePublicCollegesIdx];

let privateCollege = privateColleges[privateCollegesIdx];

let communityCollege = communityColleges[communityCollegesIdx];


//must figure out how to connect the selection to which array to run to generate the mascot selection 

//how to add points lose points(debt, savings, health points (focus, connection, etc.))



//how to 










// let button1 = document.querySelector("#button1");
// let button2 = document.querySelector("#button2");



