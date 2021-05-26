// This will be so messy :X

// Prizes
prizetypes = ['crystals <img src="https://i.imgur.com/ckBFg6Z.png">','Containers <img src="https://i.imgur.com/ChiyPgD.png">','Gold Boxes <img src="https://i.imgur.com/X2cDeUb.png?1">','Tankoins <img src="https://i.imgur.com/724Ay0Y.png">','Days of Premium  <img src="https://i.imgur.com/ScwXWQl.png">']

function prizes(element,num1,prize1,num2="",prize2=""){
    prize = num1 + ' ' + prize1
    if (num2 !== ''){
        prize += '\n' + num2 + ' ' + prize2;
    }
    document.getElementById(element).innerHTML = prize
}

/* Prize Tab: 0 - crystals, 1 - containers, 2 - GBs, 3 - TKs, 4 - Prem
You may choose to leave the last 2 parameters blank to include no second prize */
prizes("prize1",5,prizetypes[1]) // Challenge 1
prizes("prize2",5,prizetypes[2])
prizes("prize3",10000,prizetypes[0])
prizes("prize4",5,prizetypes[4])
prizes("prize5",5,prizetypes[3])
prizes("prize6",5,prizetypes[1])
prizes("prize7",5,prizetypes[2])
prizes("prize8",25000,prizetypes[0])
prizes("prize9",5,prizetypes[1])
prizes("prize10",5,prizetypes[3])
prizes("prize11",5,prizetypes[1])
prizes("prize12",5,prizetypes[2]) // Challenge 12


// Organizer Tab
organizers = ['Dynasty','Person_Random','Venerable']

function organizer(element,name='Dynasty'){ // Sets default value to Dynasty
    document.getElementById(element).innerHTML=name
}

organizer1 = "kaisdf"

organizer("organizer1",organizer1)

// Organizers

// Status Menu
statusmenu = ["Open","Under Review","Closed"]

function statusbar(element, status){
if (status === "Under Review"){
    color = "dodgerblue";    
}
else if (status === "Closed"){
    color = "red";    
}
else {
    color = "green";
}
    document.getElementById(element).innerHTML = status // return values :eyes:
    document.getElementById(element).style.color = color
}

// Challenges Bar
statusbar("stat1",statusmenu[0]) // Challenge 1
statusbar("stat2",statusmenu[0])
statusbar("stat3",statusmenu[0])
statusbar("stat4",statusmenu[0])
statusbar("stat5",statusmenu[0])
statusbar("stat6",statusmenu[0])
statusbar("stat7",statusmenu[0])
statusbar("stat8",statusmenu[0])
statusbar("stat9",statusmenu[1])
statusbar("stat10",statusmenu[1])
statusbar("stat11",statusmenu[2])
statusbar("stat12",statusmenu[2]) // Challenge 12

// Challenges Tab - Controls both Form and Table :relieved:
function setchall(element,name='Coming Soon - To be determined'){ // Sets default value to TBD
    document.getElementById(element).innerHTML=name
}

// Set the Challenges - MAKE SURE TO ENCLOSE THEM IN QUOTES
var challenge1 = "This is a test challenge."
var challenge2 = "Test"
var challenge3 = "Test"
var challenge4 = "Test"
var challenge5 = "Test"
var challenge6 = "Test"
var challenge7 = "Test"
var challenge8 = "Test"
var challenge9 = "Test"
var challenge10 = "Test"
var challenge11 = "Test"
var challenge12 = "Test"

challengeArray = [challenge1,challenge2,challenge3,challenge4,challenge5,challenge6,challenge7,challenge8,challenge9,challenge10,challenge11,challenge12]

// Loop that sets the challenges in the form and table
i=0
while (i<12){
    setchall("obj"+(i+1),challengeArray[i]);
    i++;
}