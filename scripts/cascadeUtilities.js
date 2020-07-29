function getRangedFailText(){
	Array.from(document.querySelectorAll(".resultsElement")).map(e => e.style.display="none")
	document.querySelector("#rangedFailText").style.display = "block";
	document.querySelector("#rangedFailText").innerHTML = rangedFail[Math.floor(Math.random()*rangedFail.length)];
}

function getMeleeFailText() {
	Array.from(document.querySelectorAll(".resultsElement")).map(e => e.style.display="none")
	document.querySelector("#meleeFailText").style.display = "block";
	document.querySelector("#meleeFailText").innerHTML =  meleeFail[Math.floor(Math.random()*meleeFail.length)];
}

const rangedFail = [
"Your shot was accurate, the bullet flew straight and true, and, somehow, it just bounced off of their armor",
"Your gun jams! Your next reload costs +5AP, you must reload before you can fire again",
"Something goes wildly wrong with your weapon, throwing off your aim. Gain +10 stacks of kickback",
"Your bullet just lodges itself in your opponent's armor",
"You attempt to fire and the magazine falls out of your weapon",
"You hit your target. This makes them angry. [%target% gains +10AP/MP/CP until the end of their next turn]",
"You miss. %target% is amused",
"You miss. %target% is insulted",
"You miss. %target% doesn't even notice",
"You miss. %target% does not care",
"Your target blocks your bullet with <item in their possession>",
"Your target parries your bullet",
"Something reflects off your target's armor, throwing off your aim",
"Your target shines something into your eye, throwing off your aim! [CON 8 or be blinded until the end of your next turn]",
"Your target shines something into your eye, throwing off your aim! [CON 10 or be blinded until the end of your next turn]",
"Your target shines something into your eye, throwing off your aim! [CON 12 or be blinded until the end of your next turn]",
"Your target shines something into your eye, throwing off your aim! [CON 14 or be blinded until the end of your next turn]",
"Your target shines something into your eye, throwing off your aim! [CON 16 or be blinded until the end of your next turn]",
"Your target shines something into your eye, throwing off your aim! [CON 18 or be blinded until the end of your next turn]",
"Your target shines something into your eye, throwing off your aim! [CON 20 or be blinded until the end of your next turn]",
"You lose control over your weapon, and hit a target [1d4] spaces to the [1d2 Left/Right] of %target%"]

const meleeFail = [
"%target% has trained against your fighting style, and comptently deflects your strike",
"%target% is faster than he looks, and nimbly dodges out of the way",
"%target% saw your strike coming and feinted out of the way",
"Not even close, %target% is amused",
"Not even close, %target% is insulted",
"Not even close, %target% does not care",
"Not even close, %target% doesn't seem to notice",
"Oof, so close",
"That looks like it hurt! And yet, %target% just keeps coming",
"That had to have hurt, but there's not the slightest indication you even hit",
"[Roll DEX 8] - Failure: Your target laughs and disarms you with ease | Success: You narrowly avoid your weapon being snatched from your hand(s)",
"[Roll DEX 10] - Failure: Your target laughs and disarms you with ease | Success: You narrowly avoid your weapon being snatched from your hand(s)",
"[Roll DEX 12] - Failure: Your target laughs and disarms you with ease | Success: You narrowly avoid your weapon being snatched from your hand(s)",
"[Roll DEX 14] - Failure: Your target laughs and disarms you with ease | Success: You narrowly avoid your weapon being snatched from your hand(s)",
"[Roll DEX 16] - Failure: Your target laughs and disarms you with ease | Success: You narrowly avoid your weapon being snatched from your hand(s)",
"[Roll DEX 18] - Failure: Your target laughs and disarms you with ease | Success: You narrowly avoid your weapon being snatched from your hand(s)",
"[Roll DEX 20] - Failure: Your target laughs and disarms you with ease | Success: You narrowly avoid your weapon being snatched from your hand(s)",
"[Roll DEX 8] - Failure: Your target executes a skillful parry and your weapon is knocked from your hand! | Success: Your target parries, but you keep a firm grip on your weapon",
"[Roll DEX 10] - Failure: Your target executes a skillful parry and your weapon is knocked from your hand! | Success: Your target parries, but you keep a firm grip on your weapon",
"[Roll DEX 12] - Failure: Your target executes a skillful parry and your weapon is knocked from your hand! | Success: Your target parries, but you keep a firm grip on your weapon",
"[Roll DEX 14] - Failure: Your target executes a skillful parry and your weapon is knocked from your hand! | Success: Your target parries, but you keep a firm grip on your weapon",
"[Roll DEX 16] - Failure: Your target executes a skillful parry and your weapon is knocked from your hand! | Success: Your target parries, but you keep a firm grip on your weapon",
"[Roll DEX 18] - Failure: Your target executes a skillful parry and your weapon is knocked from your hand! | Success: Your target parries, but you keep a firm grip on your weapon",
"[Roll DEX 20] - Failure: Your target executes a skillful parry and your weapon is knocked from your hand! | Success: Your target parries, but you keep a firm grip on your weapon",
"You footing is less sure than you thought, and throws off your attack",
"You footing is less sure than you thought, and throws off your attack, [Roll AGL 8 to avoid falling prone]",
"You footing is less sure than you thought, and throws off your attack, [Roll AGL 10 to avoid falling prone]",
"You footing is less sure than you thought, and throws off your attack, [Roll AGL 12 to avoid falling prone]",
"You footing is less sure than you thought, and throws off your attack, [Roll AGL 14 to avoid falling prone]",
"You footing is less sure than you thought, and throws off your attack, [Roll AGL 16 to avoid falling prone]",
"You footing is less sure than you thought, and throws off your attack, [Roll AGL 18 to avoid falling prone]",
"You footing is less sure than you thought, and throws off your attack, [Roll AGL 20 to avoid falling prone]",
"%target% grapples your arm [AGL Contest to avoid being disarmed]",
"%target% tries to take advantage of your positioning [AGL Contest to avoid being knocked prone]",
"You swing and your weapons gets stuck in a nearby surface",
"%target% bats your weapons aside and snarls at you [CHA contest to avoid being frightened for 1 turn]",
"%target% throws something at you! Your reactions are suspended until the start of your next turn",
"%target% throws dust in your eyes! [CON 8 or -6 to hit until the end of your next turn]",
"%target% throws dust in your eyes! [CON 10 or -6 to hit until the end of your next turn]",
"%target% throws dust in your eyes! [CON 12 or -6 to hit until the end of your next turn]",
"%target% throws dust in your eyes! [CON 14 or -6 to hit until the end of your next turn]",
"%target% throws dust in your eyes! [CON 16 or -6 to hit until the end of your next turn]",
"%target% throws dust in your eyes! [CON 18 or -6 to hit until the end of your next turn]",
"%target% throws dust in your eyes! [CON 20 or -6 to hit until the end of your next turn]",
"%target% parries, and follows up with a vicious strike to a vulnerable part of your body [CON 8 or +2 AP cost to all actions]",
"%target% parries, and follows up with a vicious strike to a vulnerable part of your body [CON 10 or +2 AP cost to all actions]",
"%target% parries, and follows up with a vicious strike to a vulnerable part of your body [CON 12 or +2 AP cost to all actions]",
"%target% parries, and follows up with a vicious strike to a vulnerable part of your body [CON 14 or +2 AP cost to all actions]",
"%target% parries, and follows up with a vicious strike to a vulnerable part of your body [CON 16 or +2 AP cost to all actions]",
"%target% parries, and follows up with a vicious strike to a vulnerable part of your body [CON 18 or +2 AP cost to all actions]",
"%target% parries, and follows up with a vicious strike to a vulnerable part of your body [CON 20 or +2 AP cost to all actions]",
"[STR contest] - Failure: %target% parries and shoves you [difference] m in a direction of their choice | Success: Your target parries you and tries to follow up with a shove, but you keep your footing",
"[STR contest] - Failure: %target% feints and grapples you! | Success: target feints and tries to grapple you, but you manage to keep your distance",
"[DEX contest] - Failure: %target% feints and grabs an item on your person (that you aren't holding) | Success: target feints successfully",
"[DEX contest] - Failure: %target% parries perfectly [%target% gets a free reaction attack] | Sucess: %target% parries you almost perfectly",
"%target% sees their perfect opportunity and strikes. [Target gets a free coup de grace attack against a limb]"
]