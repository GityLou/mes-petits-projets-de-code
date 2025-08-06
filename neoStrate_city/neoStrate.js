let fenetreDiv = document.getElementById('fenetreDiv')
let questionDiv = document.getElementById('questionDiv')
let btnSuivant = document.getElementById('btnSuivant')
let imgCover = document.getElementById('imgCover')
const imgFemme = document.getElementById('femme');
const imgHomme = document.getElementById('homme');


//bouton entrer 
let accueilDiv = document.getElementById('pageAccueil')
let btnEntrer = document.getElementById('btnEntrer')

btnEntrer.addEventListener('click', ()=>{
  accueilDiv.style.display ="none"
  fenetreDiv.style.display ="block"
  btnSuivant.style.display ="block"
})

// Rendre les element selectionnés jaunes
let inputs = document.querySelectorAll('input[type="radio"]');

inputs.forEach(input => {
  input.addEventListener('click', () => {
    let label = input.parentElement;
    document.querySelectorAll('label').forEach(l => {
      l.classList.remove('inputSelected');
    });
    label.classList.add('inputSelected');
  });
});

//les variables question - reponses 
let questionActuelle = 0 
let reponses = []

//fonction pour mélanger l'ordre des questions 
function melangerQuestions(array) {
  for(let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//création des objets questions reponses 
const quizz = [
  {
    question :"Dans quel quartier vivez-vous ? " ,
    imgCover: "https://i.pinimg.com/736x/aa/8a/fa/aa8afab72a4ee294be23efe699b7a483.jpg",
    reponses: [
      {type : 'realitien', points: 1, texte: " Au Celestial ", img: "https://i.pinimg.com/736x/ed/41/78/ed41785433573ffb9e9e0c2a2fb83e97.jpg"},
      {type : 'corp', points: 1, texte: "Au SkyTech Plaza", img: "https://i.pinimg.com/736x/dd/6e/26/dd6e26cfdbfc7b93645cbc2826f4e34c.jpg"},
      {type : 'hacker', points: 1, texte: "Au Quantum District", img: "https://i.pinimg.com/736x/cb/75/b3/cb75b317f3b3ea64a6f80136c768b520.jpg"},
      {type : 'bio', points: 1, texte: "Dans l EcoOasis", img: "https://i.pinimg.com/736x/ef/80/4c/ef804cbc5c06c3b041b810deee6b3095.jpg"},
      {type : 'ferailleur', points: 1, texte: "A la JunkCraft Junction", img: "https://i.pinimg.com/736x/bc/72/be/bc72be3814524ec1288f900c1d8a8647.jpg"},
    ]
  } , {
    question :`Vous vous reveillez chez vous` ,
    imgCover: "https://i.pinimg.com/736x/e5/cd/81/e5cd810e6aeb32b881566bf338735b4b.jpg",
    reponses: [
      {type : 'realitien', points: 1, texte: "Bercé par les HoloNews", img: "https://i.pinimg.com/736x/57/7a/ce/577ace1c7bb004fe953ea583b2f75894.jpg"},
      {type : 'corp', points: 1, texte: "Toast et superbe vue", img: "https://i.pinimg.com/736x/39/68/9c/39689c93766b8a3be9e8d61d95daa27c.jpg"},
      {type : 'hacker', points: 1, texte: "Un TeckSpresso en main", img: "https://i.pinimg.com/736x/d7/eb/f1/d7ebf191c6914a3539fb049ee3bae44c.jpg"},
      {type : 'bio', points: 1, texte: "Arrosant les plantes", img: "https://i.pinimg.com/736x/6c/8a/4b/6c8a4b407be2b739bd2d6ed810fe48f8.jpg"},
      {type : 'ferailleur', points: 1, texte: "La table à souder en bazar ", img: "https://i.pinimg.com/736x/a2/1e/80/a21e8059e9ee0669a1488f3e5f055a96.jpg"},
    ]
  }, {

    question :"Qui est votre meilleure-amie / ou petite amie ?  " ,

    imgCover: "https://i.pinimg.com/736x/11/14/44/1114445db81d15ac9b449cd6c296412d.jpg",

    reponses: [

      {type : 'realitien', points: 1, texte: "Zenie", img: "https://i.pinimg.com/736x/19/5b/b3/195bb3b5758cad5e73853c092e3c6211.jpg"},

      {type : 'corp', points: 1, texte: "Kaiz", img: "https://i.pinimg.com/736x/38/03/26/3803261ce5a5cd9d41729ee082fb242d.jpg"},

      {type : 'hacker', points: 1, texte: "Maxx", img: "https://i.pinimg.com/736x/a9/3d/7a/a93d7a3760a512b7a050b8672145495b.jpg"},

      {type : 'bio', points: 1, texte: "Liv", img: "https://i.pinimg.com/736x/4f/ab/c9/4fabc9f613400e8deb6ee72f2dc63064.jpg"},

      {type : 'ferailleur', points: 1, texte: "Jackson", img: "https://i.pinimg.com/736x/00/af/b5/00afb5fd5bd606afa7c6c74d0463cb74.jpg"},

    ]

  } , {
    question :"Ensemble vous sortez pour... " ,
    imgCover: "https://i.pinimg.com/736x/dd/6b/8d/dd6b8d3715b7ea8e4e6ec0f68bf430c6.jpg",
    reponses: [
      {type : 'realitien', points: 1, texte: "Faire évoluer la recherche ", img: "https://i.pinimg.com/736x/2f/63/0e/2f630e4e0aaa9ed25bfb11b2f3f6d182.jpg"},
      {type : 'corp', points: 1, texte: "Voter de nouvelles lois", img: "https://i.pinimg.com/736x/7c/33/40/7c33402cd1ef592f8730275d4ed86b3f.jpg"},
      {type : 'hacker', points: 1, texte: "Hacker des clients", img: "https://i.pinimg.com/736x/cd/7f/95/cd7f95d38780225a6a4ead267330eeeb.jpg"},
      {type : 'bio', points: 1, texte: "Bio-Repeupler les Vestiges", img: "https://i.pinimg.com/736x/e7/0f/b7/e70fb74f33fbccddc91a56236d4bc464.jpg"},
      {type : 'ferailleur', points: 1, texte: "Fabriquer des implants", img: "https://i.pinimg.com/736x/92/99/cb/9299cb626671a6ec1005469778d3b376.jpg"},
    ]
  } , {
    question :"Puis vous allez manger..." ,
    imgCover: "https://i.pinimg.com/736x/8a/58/33/8a583381b61c4aa2d9e5b84589789c47.jpg",
    reponses: [
      {type : 'realitien', points: 1, texte: "Un toast éthérique", img: "https://i.pinimg.com/736x/1a/02/26/1a0226aae23a6abb0732ad8667e017ff.jpg"},
      {type : 'corp', points: 1, texte: "Une nano gambas", img: "https://i.pinimg.com/736x/15/9a/20/159a20139fd971b64f009e3f8c221eb3.jpg"},
      {type : 'hacker', points: 1, texte: "Des pavés élevés en orbite", img: "https://i.pinimg.com/736x/31/3b/7a/313b7a706a36dc98669ed4f9f8153f64.jpg"},
      {type : 'bio', points: 1, texte: "Un rissoto de champoulp", img: "https://i.pinimg.com/736x/d3/16/03/d31603991ac92aa066e9662e42f02e44.jpg"},
      {type : 'ferailleur', points: 1, texte: "Un basilic-burger", img: "https://i.pinimg.com/736x/8b/ed/7c/8bed7c21bd03c7e9677298a6e9365154.jpg"},
    ]
  }, {
    question :"Aujourd'hui vous améliorez votre implant" ,
    imgCover: "https://i.pinimg.com/736x/5e/8b/3b/5e8b3bb17e7cb170cc02594a07e3fc55.jpg",
    reponses: [
      {type : 'realitien', points: 1, texte: "Résonateur Divin du Dat'Astra ", img: "https://i.pinimg.com/736x/52/8c/5c/528c5c6e8ffd9674171cba639e6aaa7f.jpg"},
      {type : 'corp', points: 1, texte: "Prothèse de Négoce Galactique ", img: "https://i.pinimg.com/736x/dc/d0/e7/dcd0e7d5900c98b8cc23680b1630aba0.jpg"},
      {type : 'hacker', points: 1, texte: "Glande de Boosteur Euphorique", img: "https://i.pinimg.com/736x/f3/25/e3/f325e3ce9703d0c258abb32f9d535d8d.jpg"},
      {type : 'bio', points: 1, texte: "Interface de Communication Animale", img: "https://i.pinimg.com/736x/32/60/f3/3260f3419b98919ea7a18741df58567f.jpg"},
      {type : 'ferailleur', points: 1, texte: "Greffon à Ressort Musculaire ", img: "https://i.pinimg.com/736x/f2/d8/f8/f2d8f813aaa19a39c1f10cac5d402ee1.jpg"},
    ]
  } , {
    question :"Qui est votre meilleur ami/ ou petit ami " ,
    imgCover: "https://i.ibb.co/m8tHb2q/cyborg-inside-a-mono-wheel-vehicle-neon-punk-led-Dirty-texture-underground-characterized-by-chiarosc.webp",
    reponses: [
      {type : 'realitien', points: 1, texte: "Silas", img: "https://i.pinimg.com/736x/18/3c/73/183c73fb43d2860d530c3fff0b019132.jpg"},
      {type : 'corp', points: 1, texte: "Soren", img: "https://i.pinimg.com/736x/be/98/b3/be98b3998cb03c7dae395a885eec1756.jpg"},
      {type : 'hacker', points: 1, texte: "Adoni", img: "https://i.pinimg.com/736x/11/bd/3c/11bd3cfd139f1aab8d6970cd706e1efe.jpg"},
      {type : 'bio', points: 1, texte: "Milo", img: "https://i.pinimg.com/736x/b9/70/84/b970848f2dc0619a50c6aa003e6ce111.jpg"},
      {type : 'ferailleur', points: 1, texte: "Liam", img: "https://i.pinimg.com/736x/7c/d1/95/7cd195773a0638ee071339767dfb6dec.jpg"},
    ]
  } , {
    question :"Vous allez le chercher avec votre vehicule " ,
    imgCover: "https://i.pinimg.com/736x/36/0e/04/360e0453cd8d1e65b10e3f4b5803b4b1.jpg",
    reponses: [
      {type : 'realitien', points: 1, texte: "NébulaRide Elite", img: "https://i.pinimg.com/736x/e1/4a/37/e14a379ea1bee66902b3a14d2f9104f0.jpg"},
      {type : 'corp', points: 1, texte: "FuturaGlide X5", img: "https://i.pinimg.com/736x/ec/3f/08/ec3f08cd1bb143cea74205a261650765.jpg"},
      {type : 'hacker', points: 1, texte: "InfinityDrift SG3", img: "https://i.pinimg.com/736x/c0/af/0d/c0af0d0bbd532517b7921481334509e9.jpg"},
      {type : 'bio', points: 1, texte: "XenoRift 4000", img: "https://i.pinimg.com/736x/43/06/36/430636435f9cb092a4785ff0a0a3ea2e.jpg"},
      {type : 'ferailleur', points: 1, texte: "Cosmo Strider", img: "https://i.pinimg.com/736x/88/de/33/88de33033b21f889e90fa75b8a36eba5.jpg"},
    ]
  }, {
    question :" Puis vous filez ensemble à votre repaire... " ,
    imgCover: "https://i.pinimg.com/736x/53/61/97/536197ca9f43fe185bcca2752a9e34bc.jpg",
    reponses: [
      {type : 'realitien', points: 1, texte: "Le CyberPulse Social", img: "https://i.pinimg.com/736x/31/72/32/317232aa12906b2ba42230139f5c9043.jpg"},
      {type : 'corp', points: 1, texte: "l'Epicurian Lounge", img: "https://i.pinimg.com/736x/9a/49/ad/9a49adebcf40a9c371c827afb35eac97.jpg"},
      {type : 'hacker', points: 1, texte: "Le VortexVibe Club", img: "https://i.pinimg.com/736x/fd/1a/5d/fd1a5d6b279a408c3803c6583490b0b9.jpg"},
      {type : 'bio', points: 1, texte: "La NéonNectar Street", img: "https://i.pinimg.com/736x/3a/1c/32/3a1c329df3e050b99251ed4d35fa98c9.jpg"},
      {type : 'ferailleur', points: 1, texte: "Le Pulsar Collectif", img: "https://i.pinimg.com/736x/ef/53/1d/ef531d65e17180caae7018374c5be501.jpg"},
    ]
  } , {
    question : "Vous commandez un... " ,
    imgCover: "https://i.pinimg.com/736x/4c/6d/7c/4c6d7c755cdda228007857036bf1bda1.jpg",
    reponses: [
      {type : 'realitien', points: 1, texte: "un Cthulhu Sunrise ", img: "https://i.pinimg.com/736x/39/3c/1d/393c1d288ca7b2b478f6c552f336fe79.jpg"},
      {type : 'corp', points: 1, texte: "un Comet Shot", img: "https://i.pinimg.com/736x/3f/f2/52/3ff2528ad9dff6b3fcae577328fda62b.jpg"},
      {type : 'hacker', points: 1, texte: "un Gin synthétique", img: "https://i.pinimg.com/736x/08/db/9f/08db9fa0a2bdfc4bdb76a5fe0dc0b7dd.jpg"},
      {type : 'bio', points: 1, texte: "un Toxic martini", img: "https://i.pinimg.com/736x/51/d7/3a/51d73a6dc9abeceffedcb5c7adb6eb57.jpg"},
      {type : 'ferailleur', points: 1, texte: "un Iron Mary", img: "https://i.pinimg.com/736x/ea/9a/dd/ea9add348b3807a7701fb5f1512952fc.jpg"},
    ]
  }, {
    question : "La nuit prend fin aux côtés de vos amis " ,
    imgCover: "https://i.pinimg.com/736x/af/f4/29/aff4297539e83fe066f24f6639ffe7d3.jpg",
    reponses: [
      {type : 'realitien', points: 1, texte: "Plongés au coeur de la Dat'Astra", img: "https://i.pinimg.com/736x/63/20/06/632006a7be4f9bf788ff6ff5cfd16515.jpg"},
      {type : 'corp', points: 1, texte: "Trichant au GoldSilver Casino", img: "https://i.pinimg.com/736x/a1/28/40/a128401352917243e52165914cbba497.jpg"},
      {type : 'hacker', points: 1, texte: "Reglant vos comptes au Nexus", img: "https://i.pinimg.com/736x/e2/08/40/e208409c73c3ed215572d45f017c4a02.jpg"},
      {type : 'bio', points: 1, texte: "En fumant de la bleuette ", img: "https://i.pinimg.com/736x/a1/81/02/a1810214af2b44c587ae1c790c03f982.jpg"},
      {type : 'ferailleur', points: 1, texte: "Auprès de beaux hybrides galactiques", img: "https://i.pinimg.com/736x/6c/53/7f/6c537ff67fa56283ddd69f6cdab47eda.jpg"},
    ]
  } ,
]

//fonction pour afficher les questions 
function afficheQuestion() {
  melangerQuestions(quizz[questionActuelle].reponses);
  document.getElementById('imgCover').src = quizz[questionActuelle].imgCover;

 const questionTitre = document.querySelector('.questionTitre');
  questionTitre.innerText = quizz[questionActuelle].question; 

  questionDiv.innerHTML = `
    <p class="questionTitre">${quizz[questionActuelle].question}</p>
      ${quizz[questionActuelle].reponses.map(answer => `
        <label>
          <input type="radio" class="input" name="reponse" value="${answer.type}">
          ${answer.texte}
        </label>
      `).join('')}
  `;
  
  // Changer l'imgCover et Ajouter un glitch sur les click des boutons radio
document.querySelectorAll('input[name="reponse"]').forEach(input => {
  input.addEventListener('click', () => {
    const reponseChoisie = input.value;
    if (questionActuelle < quizz.length) {
      const reponseObj = quizz[questionActuelle].reponses.find(reponse => reponse.type === reponseChoisie);
      if (reponseObj) {
        imgCover.src = reponseObj.img;
        imgCover.classList.add('glitch');
        setTimeout(() => {
          imgCover.classList.remove('glitch');
        }, 300);
      } else {
        console.error('Objet de réponse non trouvé');
      }
    }
  });
});

}

// J'ai ajouté changer l ImgCover et Ajouter Glitch a l'interieur ET a l'exterieur pour que ça fonctionne sur la page d'accueil et aussi lors de l'evenement Bouton suivant. Trouver comment arranger ça 

// Changer l'imgCover et Ajouter un glitch sur les click des boutons radio
document.querySelectorAll('input[name="reponse"]').forEach(input => {
  input.addEventListener('click', () => {
    const reponseChoisie = input.value;
    if (questionActuelle < quizz.length) {
      const reponseObj = quizz[questionActuelle].reponses.find(reponse => reponse.type === reponseChoisie);
      if (reponseObj) {
        imgCover.src = reponseObj.img;
        imgCover.classList.add('glitch');
        setTimeout(() => {
          imgCover.classList.remove('glitch');
        }, 300);
      } else {
        console.error('Objet de réponse non trouvé.');
      }
    }
  });
});

//afficher la prochaine question 
function prochaineQuestion() {
  const reponseChoisie = document.querySelector('input[name="reponse"]:checked')
  
  if (reponseChoisie) {
    reponses.push(reponseChoisie.value)
    questionActuelle++
    
    if (questionActuelle < quizz.length) {
      afficheQuestion()
    } else {
      afficheResultat()
    }
  } else {
    alert ("Choisis une réponse ma caille")
  }
  // Rendre les element selectionnés jaunes, j'ai du le rajouter ici alors qu'il est déjà au début du code, mais sinon ça ne s'appliquait pas a partir de la question numéro deux. A réparer. 
let inputs = document.querySelectorAll('input[type="radio"]');

inputs.forEach(input => {
  input.addEventListener('click', () => {
    let label = input.parentElement;
    document.querySelectorAll('label').forEach(l => {
      l.classList.remove('inputSelected');
    });
    label.classList.add('inputSelected');
  });
});
}


//creer une fonction pour attribuer le type en fonction des réponses
function attribueType() {
  const pointsParTypes = {"realitien": 0, "corp": 0, "hacker": 0, "bio": 0, "ferailleur": 0,} 
  reponses.forEach(reponseChoisie => {
    quizz.forEach(question => {
      question.reponses.forEach(reponse => {
        if (reponse.type === reponseChoisie) {
          pointsParTypes[reponse.type] += reponse.points
        }
      })
    })
  })              

//trouve le type avec le plus de points
  let typeGagnant = ''
  let maxPoints = -1
  
  for (const type in pointsParTypes ) {
    if (pointsParTypes[type] > maxPoints) {
      maxPoints = pointsParTypes[type]
      typeGagnant = type 
    }
  }
  
  return typeGagnant
}

// Afficher les resultats
function afficheResultat() {
  const questionDiv = document.getElementById('questionDiv');
  const fenetreDiv = document.getElementById('fenetreDiv');
  const btnSuivant = document.getElementById('btnSuivant');
  const imgCover = document.getElementById('imgCover');

  fenetreDiv.removeChild(questionDiv);
  btnSuivant.style.display = "none";
  imgCover.style.display = "none";
  
  let signature = document.getElementById('signature');
  signature.style.display ="block";
    
  const resultatDiv = document.getElementById('resultatDiv');
  resultatDiv.style.display = 'block';

  const resultatTxt = document.getElementById('resultatTxt');
  const typeGagnant = attribueType();

  // Texte de resultat pour chaque types
  let resultatTitre = document.getElementById('resultatTitre');

  switch (typeGagnant) {
      
    case "realitien":
      resultatTitre.innerText = 'Vous êtes un Réalitien';
      resultatTxt.innerText = " En tant que fervent disciple de l'église du Dat'Astra, votre vie entière est dédiée à l'ascension de Neo Strate. Chaque battement de votre cœur est une harmonie dirigée par la grande Divinité, que vous pouvez approcher grâce à certaines substances et implants sacrés. Votre existence a pour but de transcender votre forme physique, de vous élever vers le cosmos et d'atteindre enfin l'état éthéré unique. En attendant, le généreux soutien financier des Ascend Corp vous permet de poursuivre activement vos recherches scientifiques. Votre priorité demeure inébranlable : atteindre les sommets, tout en condamnant fermement ce qui se trouve en bas.";
      imgFemme.src = "https://i.pinimg.com/736x/64/b9/a4/64b9a4c76cb1933ae1862bd425beb268.jpg";
      imgHomme.src = "https://i.pinimg.com/736x/4a/7d/17/4a7d1736e11f6206c106834c67004ef9.jpg";
      btnRealitien.style.display ="block"
      btnCorp.style.display ="block"
      btnHacker.style.display ="block"
      btnBio.style.display ="block"
      btnFerailleur.style.display ="block"
      break;
    case "corp":
      resultatTitre.innerText = 'Vous êtes un AscendCorp';
      resultatTxt.innerText = "En tant que membre éminent des Ascend Corp, votre naissance privilégiée engendre des attentes considérables venant de chacune de vos decisions. Au cœur de ce labyrinthe de conflits et de manœuvres politiques, la manière dont vous entretenez vos relations influence directement la grande Ascension. C'est un fardeau considérable, mais les avantages sont tout aussi exceptionnels. En tant que faction unique détenant les casques à oxygène raréfié, vous explorez les strates les plus élevées de la ville, et entrez même en contact avec les fédérations galactiques supérieures. C'est un pouvoir et une responsabilité que vous portez avec fierté.";
      imgFemme.src = "https://i.pinimg.com/736x/f8/5b/30/f85b30fc5887f1003fc4109c333ebb96.jpg";
      imgHomme.src = "https://i.pinimg.com/736x/a4/cb/46/a4cb46e0974ab3cef61c7d7956c264e9.jpg";
      break;
    case "hacker":
      resultatTitre.innerText = 'Vous êtes un Hacker Indépendant';
      resultatTxt.innerText = "En tant que hacker indépendant, votre loyauté n'appartient qu'à vous-même et vous travaillez au gré des demandes de clients. Bien que certains de vos pairs forment des factions, votre allégeance reste dénuée de toute couleur politique. Votre expertise s'étend de la programmation d'implants à la manipulation des bourses galactiques, en passant par les coups d'État des bio conspirateurs, ou les missions plus discutables sollicitées par les Ascend Corp. La discrétion est la signature d'un hacker de qualité. Virtuoses des rues, regorgeant de talent, vous connaissez chaque recoin de Neo Strate comme votre poche";
      imgFemme.src = "https://i.pinimg.com/736x/b7/17/c7/b717c742220b24eece374239f8907bd2.jpg";
      imgHomme.src = "https://i.pinimg.com/736x/0b/44/3a/0b443a0179dde6e443eb3f4f722268bc.jpg" ;
      break;
    case "bio":
      resultatTitre.innerText = 'Vous êtes un Bio-Conspirateur';
      resultatTxt.innerText = "Membre dévoué de votre famille des bio-conspirateurs, votre unité est liée par un objectif commun : la bio-repopulation de la cité de Neo Strate. Vous œuvrez avec ardeur pour restaurer la vie végétale et animale dans la cité. En tant qu'expert, vous excellez dans la préparation de potions géantifiantes et toxicifiantes ainsi que dans la création de bombes chimiques, utilisées de manière stratégique pour éliminer les menaces et protéger vos efforts, régulièrement mis à mal par le gouvernement qui vous considère comme de véritables terroristes.";
      imgFemme.src = "https://i.pinimg.com/736x/ec/05/5f/ec055f9fb6d767e546cacfa27071b38f.jpg";
      imgHomme.src = "https://i.pinimg.com/736x/41/2c/13/412c1354c8ab7ed3d9c3d9a2bccff10d.jpg";
      break;
    case "ferailleur":
      resultatTitre.innerText = 'Vous êtes un MetaFerailleur';
      resultatTxt.innerText = "En tant que meta ferailleur, la mécanique quantique n'a aucun secret pour vous, et dans cette vaste cité, votre expertise ne connaît jamais de pénurie. Bien que vous vendiez vos pièces d'implants améliorés à tous ceux qui en ont besoin, votre faction est réputée pour être une fervente opposante de la grande Ascension. Vous êtes les seuls habitants de la ville ayant l'audace et les ressources pour descendre dans les abysses et récupérer les pièces nécessaires à vos prouesses. En vérité, vous êtes les seuls à vraiment percevoir ce qui se trame dans les profondeurs. C'est surement pour ça qu'on tente souvent de vous réduire au silence.";
      imgFemme.src = "https://i.pinimg.com/736x/1b/21/52/1b21527c3d3b18bee0ff8a2ef0da9c36.jpg";
      imgHomme.src = "https://i.pinimg.com/736x/f9/41/30/f94130911013359ff50a1111ac2b9c7c.jpg";
      break;
    default:
      resultatTitre.innerText = "NEO STRATE City";
      resultatTxt.innerText = "";
  }
  //Afficher les boutons des autres types
      btnRealitien.style.display ="block"
      btnCorp.style.display ="block"
      btnHacker.style.display ="block"
      btnBio.style.display ="block"
      btnFerailleur.style.display ="block"
 }

//Regarder les autres types a la fin du test
//J'aurais préféré trouver un moyen d'appeller les different case de mon switch typeGagnant mais pas encore trouvé comment

  let btnRealitien = document.getElementById('btnRealitien')
  btnRealitien.addEventListener('click', ()=>{
    resultatTitre.innerText = 'Réalitien';
    resultatTxt.innerText = " En tant que fervent disciple de l'église du Dat'Astra, votre vie entière est dédiée à l'ascension de Neo Strate. Chaque battement de votre cœur est une harmonie dirigée par la grande Divinité, que vous pouvez approcher grâce à certaines substances et implants sacrés. Votre existence a pour but de transcender votre forme physique, de vous élever vers le cosmos et d'atteindre enfin l'état éthéré unique. En attendant, le généreux soutien financier des Ascend Corp vous permet de poursuivre activement vos recherches scientifiques. Votre priorité demeure inébranlable : atteindre les sommets, tout en condamnant fermement ce qui se trouve en bas.";
      imgFemme.src = "https://i.pinimg.com/736x/64/b9/a4/64b9a4c76cb1933ae1862bd425beb268.jpg";
      imgHomme.src = "https://i.pinimg.com/736x/4a/7d/17/4a7d1736e11f6206c106834c67004ef9.jpg";
})
  let btnCorp = document.getElementById('btnCorp')
  btnCorp.addEventListener('click', ()=>{
    resultatTitre.innerText = 'AscendCorp';
    resultatTxt.innerText = "En tant que membre éminent des Ascend Corp, votre naissance privilégiée engendre des attentes considérables venant de chacune de vos decisions. Au cœur de ce labyrinthe de conflits et de manœuvres politiques, la manière dont vous entretenez vos relations influence directement la grande Ascension. C'est un fardeau considérable, mais les avantages sont tout aussi exceptionnels. En tant que faction unique détenant les casques à oxygène raréfié, vous explorez les strates les plus élevées de la ville, et entrez même en contact avec les fédérations galactiques supérieures. C'est un pouvoir et une responsabilité que vous portez avec fierté.";
      imgFemme.src = "https://i.pinimg.com/736x/f8/5b/30/f85b30fc5887f1003fc4109c333ebb96.jpg";
      imgHomme.src = "https://i.pinimg.com/736x/a4/cb/46/a4cb46e0974ab3cef61c7d7956c264e9.jpg";
  })
  let btnHacker = document.getElementById('btnHacker')
  btnHacker.addEventListener('click', ()=>{
    resultatTitre.innerText = 'Hacker Indépendant';
    resultatTxt.innerText = "En tant que hacker indépendant, votre loyauté n'appartient qu'à vous-même et vous travaillez au gré des demandes de clients. Bien que certains de vos pairs forment des factions, votre allégeance reste dénuée de toute couleur politique. Votre expertise s'étend de la programmation d'implants à la manipulation des bourses galactiques, en passant par les coups d'État des bio conspirateurs, ou les missions plus discutables sollicitées par les Ascend Corp. La discrétion est la signature d'un hacker de qualité. Virtuoses des rues, regorgeant de talent, vous connaissez chaque recoin de Neo Strate comme votre poche.";
      imgFemme.src = "https://i.pinimg.com/736x/b7/17/c7/b717c742220b24eece374239f8907bd2.jpg";
      imgHomme.src = "https://i.pinimg.com/736x/0b/44/3a/0b443a0179dde6e443eb3f4f722268bc.jpg";
  })
  let btnBio = document.getElementById('btnBio')
  btnBio.addEventListener('click', ()=>{
    resultatTitre.innerText = 'Bio Conspirateur';
    resultatTxt.innerText = "Membre dévoué de votre famille des bio-conspirateurs, votre unité est liée par un objectif commun : la bio-repopulation de la cité de Neo Strate. Vous œuvrez avec ardeur pour restaurer la vie végétale et animale dans la cité. En tant qu'expert, vous excellez dans la préparation de potions géantifiantes et toxicifiantes ainsi que dans la création de bombes chimiques, utilisées de manière stratégique pour éliminer les menaces et protéger vos efforts, régulièrement mis à mal par le gouvernement qui vous considère comme de véritables terroristes";
      imgFemme.src = "https://i.pinimg.com/736x/ec/05/5f/ec055f9fb6d767e546cacfa27071b38f.jpg";
      imgHomme.src = "https://i.pinimg.com/736x/41/2c/13/412c1354c8ab7ed3d9c3d9a2bccff10d.jpg";
      
  })
  let btnFerailleur = document.getElementById('btnFerailleur')
  btnFerailleur.addEventListener('click', ()=>{
    resultatTitre.innerText = 'Meta Ferailleur';
      resultatTxt.innerText = "En tant que meta ferailleur, la mécanique quantique n'a aucun secret pour vous, et dans cette vaste cité, votre expertise ne connaît jamais de pénurie. Bien que vous vendiez vos pièces d'implants améliorés à tous ceux qui en ont besoin, votre faction est réputée pour être une fervente opposante de la grande Ascension. Vous êtes les seuls habitants de la ville ayant l'audace et les ressources pour descendre dans les abysses et récupérer les pièces nécessaires à vos prouesses. En vérité, vous êtes les seuls à vraiment percevoir ce qui se trame dans les profondeurs. C'est surement pour ça qu'on tente souvent de vous réduire au silence.";
      imgFemme.src = "https://i.pinimg.com/736x/1b/21/52/1b21527c3d3b18bee0ff8a2ef0da9c36.jpg";
      imgHomme.src = "https://i.pinimg.com/736x/f9/41/30/f94130911013359ff50a1111ac2b9c7c.jpg";
     
  })