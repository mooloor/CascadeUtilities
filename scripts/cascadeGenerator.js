function triggerGenerateNPC() {
	Array.from(document.querySelectorAll(".resultsElement")).map(e => e.style.display="none")
	document.querySelector("#NPCBlock").style.display = "block";
}

function triggerGenerateCharacter() {
	Array.from(document.querySelectorAll(".resultsElement")).map(e => e.style.display="none")
	document.querySelector("#NewCharBlock").style.display = "block";
}

function triggerImportCharacter() {
	Array.from(document.querySelectorAll(".resultsElement")).map(e => e.style.display="none")
	document.querySelector("#ImportBlock").style.display = "block";
}

function generateNPC() {
	let form = document.querySelector("#NPCForm");
	let NPC = {
		"name": form["Name"].value,
		"job": form["Job"].value,
		"home": form["Home"].value,
		"age": form["Age"].value,
		"likes":[],
		"dislikes":[]
	}
	if(NPC.job == "") {
		NPC.job = getWeightedRandom(jobs);
	}
	if(NPC.home == "undefined") {
		NPC.home = getWeightedRandom(locations);
	}
	if(NPC.age == ""){
		var age = 0;
		for(var i = 0; i < 10; i++){
			age += Math.round(Math.random()*11)+1;
		}
		age -= Math.round(Math.random()*30)+1;
		NPC.age = age;
	}
	if(NPC.likes = []){
		var num = Math.floor(Math.random()*10)+1;
		var subj = Math.floor(Math.random()*subjects.length);
		NPC.likes.push(subjects[subj]);
		while(num <= 4){
			subj = Math.floor(Math.random()*subjects.length);
			if(!NPC.likes.includes(subjects[subj])){
				NPC.likes.push(subjects[subj]);
			}
			num = Math.floor(Math.random()*10)+1;
		}
	}
	if(NPC.dislikes = []){
		var num = Math.floor(Math.random()*10)+1;
		var subj = Math.floor(Math.random()*subjects.length);
		NPC.dislikes.push(subjects[subj]);
		while(num <= 4){
			subj = Math.floor(Math.random()*subjects.length);
			if(!NPC.dislikes.includes(subjects[subj])){
				NPC.dislikes.push(subjects[subj]);
			}
			num = Math.floor(Math.random()*10)+1;
		}
	}
	if(NPC.name == ""){
		fetch("https://namey.muffinlabs.com/name.json?with_surname=true&frequency=all").then(d=>d.json())
																					   .then(d=>NPC.name = d[0])
																					   .then(()=>displayNPC(NPC));
	}
	return false;
}

function generateCharacter() {
	console.log('char');
}

function importCharacter() {
	console.log('import');
}

function displayNPC(npc){
	console.log(npc);
	document.querySelector("#NPCName").innerHTML = "Name: " + npc.name;
	document.querySelector("#NPCJob").innerHTML = "Job: " + npc.job;
	document.querySelector("#NPCHome").innerHTML = "Home: " + npc.home;
	document.querySelector("#NPCAge").innerHTML = "Age: " + npc.age;
	document.querySelector("#NPCLikes").innerHTML = "Likes: " + npc.likes;
	document.querySelector("#NPCDislikes").innerHTML = "Dislikes: " + npc.dislikes;
}


function softmax(arr) { /* Nicked from somewhere on the internet (DDG 3rd result when searching js softmax) */
    return arr.map(function(value,index) { 
      return Math.exp(value) / arr.map( function(y /*value*/){ return Math.exp(y) } ).reduce( function(a,b){ return a+b })
    })
}

function getWeightedRandom(dict){
	const rand = Math.random();
	let chosen = null;
	softmax(Object.values(dict)).reduce(function(acc, cur, idx, src) {
		if(acc < rand){
			chosen = Object.keys(dict)[idx];
		}
		return acc+cur;
	}, 0);
	return chosen;
}

const subjects = [
"Their job",
"Anarchism",
"Monarchy",
"Fascism",
"Communism",
"The government of Venus",
"The governments of Earth",
"The government of the Terran Directorate",
"The government of Mars",
"The government of The Belt",
"The government of The Jovian Republics",
"Puppies",
"Kittens",
"Snakes",
"Spiders",
"Lizards",
"Insects",
"Reptiles",
"Children",
"The Elderly",
"Watching TV",
"Playing Games",
"Writing",
"Programming",
"Cooking",
"Clubbing",
"Boxing",
"Woodworking",
"3D Modelling",
"Clones",
"Cloning",
"Natural Births",
"Designer Babies",
"Parents",
"Spaceflight",
"Exojumping",
"Swimming",
"EVA",
"Painting",
"Drinking",
"Eating",
"Gold",
"Silver",
"Chemistry",
"Physics",
"Biology",
"Teaching",
"Bread",
"Pickles",
"Fish",
"Beef",
"Pork",
"Chicken",
"Fruits",
"Vegetables",
"Going to the Pub",
"Pub Quizzes",
"Chickens"
]

const jobs = { /* This will get reduced exponentially so the smallest ones are REALLY UNLIKLEY to appear, most other jobs should be between ~0.1-5 */
"Clerk": 3,
"Head of State": 0.0001,
"Legislator": 0.001,
"Beggar": 1,
"Lawyer": 1,
"Scientist": 1.5,
"Student": 3,
"Trust Fund Baby": 0.001,
"CEO": 0.001,
"Chef": 1,
"Professor": 0.1,
"Ship Crew Member": 3,
"Creator": 5,
"Security Guard (Minor)": 2,
"Security Guard (Major)": 0.2,
"Fire Crew": 0.5,
"Social Worker": 1,
"Journalist": 0.5,
"Pilot": 1,
"Soldier": 1,
"Drug Slinger": 0.2,
"Clonelegger": 0.001,
"Mafioso": 0.01,
"Don": 0.0001,
"Corporate Employee": 5,
"Spy": 0.1,
"Diplomat": 0.1,
"Enforcer": 0.1,
"Engineer": 1,
"Mechanic": 2,
"Programmer": 2,
"Mugger": 0.02,
"Military Command Staff": 0.002,
"Janitor": 1,
"Administrator": 0.5,
"Salesperson": 0.5,
"Doctor": 1,
"Nurse": 2,
"Window Cleaner": 0.1,
"Editor": 0.05,
"Vet": 0.75,
"Florist": 0.5,
"Vintner": 0.0005,
"Butcher": 1.2,
"Baker": 1.5,
"Plumber": 1.1,
"Electrician": 1.1,
"Craftsperson": 0.75,
"Manual Laborer": 1.5,
"Architect": 0.5,
"Mercenary": 0.1
}

const locations = { //Weights are populations in 10s of billions
"Heliosphere": 1.5,
"Venus": 0.5,
"Earth": 1.2,
"Terran Directorate": 1.1,
"Mars": 0.7,
"The Belt": 0.6,
"The Jovian Republics": 1.2,
"Saturn": 0.0001,
"Other": 0.0001
}