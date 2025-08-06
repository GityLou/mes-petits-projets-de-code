let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["friandises"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
  { name: ' friandise', power: 5 },
  { name: ' longe en cuir', power: 30 },
  { name: ' selle en cristal', power: 50 },
  { name: ' traducteur draconique', power: 100 }
];
const monsters = [
  {
    name: "Zephyros, Dragon des cieux",
    level: 2,
    health: 17
  },
  {
    name: "Abyssia, Dragon des profondeurs",
    level: 5,
    health: 45
  },
  {
    name: "Igniferra, Dragon Créateur",
    level: 20,
    health: 80
  }
]
const locations = [
    {
        name: "chateau",
        "button text": ["La boutique du dragonnier","L'arène d'entrainement","Montagne du Dragon Créateur"],
        "button functions": [goStore, goCave, fightDragon],
        text: "Vous êtes dans la salle commune du château avec vos amis discutant joyeusement. \n 🏰✨ \n Le charismatique professeur Bulverde vous donne un petit conseil:\n 'Ah, jeunes dresseurs ! Pensez à récupérer un peu de santé après chaques dressages.\n Et commencez par un dragon avec une petite endurance. \nQue l'aventure vous guide.'"
    },
    {
        name: "la boutique du dragonnier",
        "button text": ["Potion de santé (10 cristaux)", "Equipement (30 cristaux)", "Rentrer au château"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "Vous entrez dans la Boutique du Dragonnier. Les étagères regorgent de harnais étincelants, de friandises exotiques et de manuels anciens sur l'art du dressage de dragons. Un parfum aux herbes magiques flotte dans l'air.\n 🍄🕯️🌙🌿",
       
    },
    {
        name: "arène d'entrainement",
        "button text": ["Dresser Zéphyros","Dresser Abyssia","Retour au château"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "Vous entrez dans l'arène ! La vue spéctaculaire ouverte sur le ciel vous coupe le souffle.\n 🐉✨\nAu bout de la piste, Zéphyros, le dragon des cieux, déploie majestueusement ses ailes argentées (dragon de petite endurance) \n\n De son côté, Abyssia, la dragonne des abîmes, glisse avec grâce dans le bassin, ses écailles bleues brillant sous les reflets de l'eau (dragon de moyenne endurance)"
    },
    {
        name: "dressage",
        "button text": ["Monter sur le dos", "Caresser", "Revenir plus tard"],
        "button functions": [attack, dodge, goTown],
        text: "Vous tentez de dresser le dragon. Toute la classe a les yeux rivés sur vous. Et malgré la taille imposante de celui ci, vous avez entièrement confiance en vous. Tous vos sens sont aux aguets... \n C'est parti.\n🐉✨"
    },
    {
        name: "dragon dréssé",
        "button text": ["Rentrer dîner", "Rentrer se doucher", "Rentrer dormir"],
        "button functions": [goTown, goTown, goTown],
        text: 'DRAGON DRÉSSÉ 👌🐉 Bravo ! \n Une explosion d applaudissement retentit alors que vous atterissez sur le dos de votre dragon. Celui-ci vous donne un grand coup de langue et vos amis vous rejoignent pour vous féliciter. Le professeur a beaucoup aimé votre méthode de dressage.'
    },
    {
        name: "lose",
        "button text": ["Retourner en classe", "Prendre un week-end", "Rentrer dormir"],
        "button functions": [restart, restart, restart],
        text: "Badaboum! 😤💢 Le dragon vous a fait gouter à un virage sérré et vous êtes tombé de votre selle. Ça l'a bien fait rire. Mais vous, vous avez mal aux fesses, et vos équipements sont cassés. Retentez votre chance!"
    },
    { 
        name: "win", 
        "button text": ["Aller au bal - Fin", "Faire la fête avec vos amis - Fin", "Partir à l'aventure avec son dragon - Fin"], 
        "button functions": [restart, restart, restart], 
        text: "Bravo ! 🎉  Vous avez réussi à dresser le dragon créateur ! Votre lien est à présent indéfétible, vous êtes liés à jamais. Vous êtes le premier élève à avoir réussit cet exploit. L'année prochaine vous deviendrez professeur. Mais en attendant, vous partez faire le tour du monde avec vos amis et vos dragons. " 
    },{
        name : "epuisement",
        "button text": ["Prendre une douche", "Faire une sieste", "Lire un livre"],
        "button functions": [restart, restart, restart],
        text : "Vous êtes epuisée... 😴 \n Le dragon a passé un excellent moment sous vos gratouilles, mais vous n'avez plus d'energie pour continuer le dressage. \n Revenez plus tard!"
    }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
  document.getElementById("texteAccueil").innerText ="Dragon Land";
  document.getElementById("imgAccueil").src ="https://i.pinimg.com/564x/69/d0/49/69d04972df246da8bce54effa1f322e5.jpg" ;
}

function goStore() {
  update(locations[1]);
  document.getElementById("texteAccueil").innerText ="La boutique";
  document.getElementById("imgAccueil" ).src = "https://i.pinimg.com/564x/cb/c3/09/cbc309237eb1bcfa41d412b67e9a3e10.jpg";
}

function goCave() {
  update(locations[2]);
  document.getElementById("texteAccueil").innerText ="L'arène";
  document.getElementById("imgAccueil").src ="https://i.pinimg.com/originals/b3/3e/a1/b33ea1007a87ab1f81d67b1dfb529d25.gif";
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
    text.innerText = "Vous avez acheté 1 potion de vie. \n Vous avez maintenant " + health + " de santé.";
    document.getElementById("imgAccueil" ).src = "https://i.pinimg.com/564x/2a/ec/37/2aec375ec3be9399ce34f48992d81cdc.jpg";
  } else {
    text.innerText = "Vous n'avez pas assez de cristaux pour acheter une potion, jeune mouflette.";
    document.getElementById("imgAccueil" ).src = "https://i.pinimg.com/564x/cb/c3/09/cbc309237eb1bcfa41d412b67e9a3e10.jpg";
  }
}

function buyWeapon() {
  if (currentWeapon < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "Vous avez acquis ceci :  " + newWeapon + ".\n";
      inventory.push(newWeapon);
      text.innerText += " Vous avez dans votre sac : " + inventory;
      document.getElementById("imgAccueil").src ="https://i.pinimg.com/564x/7b/64/a2/7b64a27ad3ed8c2c64ba40a207d153ea.jpg";
    } else {
      text.innerText = "Vous n'avez pas assez de cristaux pour acheter un nouvel équipement, petit drakelin.";
      document.getElementById("imgAccueil" ).src = "https://i.pinimg.com/564x/cb/c3/09/cbc309237eb1bcfa41d412b67e9a3e10.jpg";
    }
  } else {
    text.innerText = "Vous avez déjà tous les meilleurs équipements !";
    button2.innerText = "vendre votre premier équipement (15 cristaux)";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "Vous avez vendu ceci : " + currentWeapon + ".";
    text.innerText += " Dans votre sac a dos vous avez : " + inventory;
  } else {
    text.innerText = "Ne vendez pas votre seul equipement!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
  document.getElementById("texteAccueil").innerText ="Zephyros";
  document.getElementById("imgAccueil").src = "https://i.pinimg.com/564x/84/d7/95/84d795716f60f456ab522fcfd253a72c.jpg";
}

function fightBeast() {
  fighting = 1;
  goFight();
  document.getElementById("texteAccueil").innerText ="Abyssia";
  document.getElementById("imgAccueil").src ="https://i.pinimg.com/564x/d4/8a/99/d48a9980ab9c34d96b5bb0c30ae4b94d.jpg";
}

function fightDragon() {
  fighting = 2;
  goFight();
  document.getElementById("texteAccueil").innerText ="Montagne sacrée";
  document.getElementById("imgAccueil").src = "https://i.pinimg.com/564x/bc/7f/ab/bc7fab4fd5684fb4ed8c83b380e0743a.jpg";
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = "grid";
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "Le dragon " + monsters[fighting].name + " tente de s'enfuir.";
  text.innerText += " Vous utilisez votre " + weapons[currentWeapon].name + ".";
  health -= getMonsterAttackValue(monsters[fighting].level);
  if (isMonsterHit()) {
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 2;    
  } else {
    text.innerText += " Oups, vous avez raté.";
  }
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose();
  } else if (monsterHealth <= 0) {
    fighting === 2 ? winGame() : defeatMonster();
  }
  if (Math.random() <= .1 && inventory.length !== 1) {
    text.innerText += " Votre " + inventory.pop() + " s'est fait cassé par le dragon.";
    currentWeapon--;
  }
}

function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp));
  console.log(hit);
  return hit > 0 ? hit : 0;
}

function isMonsterHit() {
  return Math.random() > .2 || health < 20;
}

function dodge() {
  const dodgeDamage = 3 ;
  monsterHealth -= dodgeDamage;
  monsterHealthText.innerText = monsterHealth;
  health -= dodgeDamage * 3;
  healthText.innerText = health;
  text.innerText = "Vous carressez doucement le dragon qui s'appaise.\n Votre lien se resserre et vous gagnez un peu plus la confiance de " + monsters[fighting].name; 
  if(monsterHealth <= 0){
    update(locations[4]);
    xp += 1 ;
    xpText.innerText = xp;
  };
  if(health <= 0){
    update(locations[7])
  }
 }

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7);
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4]);
  document.getElementById("imgAccueil").src = "https://i.ibb.co/pzxK4c4/ac891998fb0312934fcc65eeb7e38072.jpg";
}

function lose() {
  update(locations[5]);
  document.getElementById("imgAccueil").src = "https://i.ibb.co/j3bM2bx/27f236b2626c2f68563bf1c093e85499.jpg";
}

function winGame() {
  update(locations[6]);
  document.getElementById("imgAccueil").src = "https://i.pinimg.com/564x/69/24/28/692428899a1235f560483589c2d07b4b.jpg";
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeapon = 0;
  inventory = ["friandise"];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpText.innerText = xp;
  goTown();
}