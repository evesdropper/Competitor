// This will be so messy :X


// Challenges


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

