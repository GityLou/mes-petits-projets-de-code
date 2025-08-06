let btnEntrer = document.getElementById('entrer');
let questionContainer = document.getElementById('question-container');
let btnSuivant = document.getElementById('next-btn');
let imgCover = document.getElementById('imgCover');
let sousTitre = document.getElementById('sousTitre');

//bouton entrer et dmd du nom du joueur
btnEntrer.addEventListener('click', () => {
  btnEntrer.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  btnSuivant.classList.remove("hidden");
  sousTitre.classList.add("hidden");
  imgCover.src = "https://i.ibb.co/VYTwHdD/hogwarts-casttle-boreal-lights-Glitters-Bokeh-Translucide-bioluminescence-Art-by-Wang-ling-WLOP-Lois.png";
  nomUtilisateur = prompt('Entrez votre nom de sorcier :')
  if (nomUtilisateur === null || nomUtilisateur === "") {
    nomUtilisateur ="Bel inconnu"
    alert("Pas de nom ? Vous vous appellerez donc 'Bel inconnu' ")
  }
});


// Initialisation des variables
let currentQuestion = 0;
let answers = [];

// Fonction pour mélanger un tableau de manière aléatoire d'apres chat gpt
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Questions et réponses
const quizData = [
  {
    question: "Quelle est votre matière préférée à Poudlard ?",
    coverImage: "https://i.ibb.co/zS2KynP/Ravenclaw-house-hogwarts-Glitters-Bokeh-Translucide-bioluminescence-Art-by-Loish-Craig-mullins-and-O.webp",
    answers: [
      { house: "Gryffindor", points: 10, text: "Sorts et enchantements" },
      { house: "Hufflepuff", points: 10, text: "Soins aux créatures magiques" },
      { house: "Ravenclaw", points: 10, text: "Métamorphose" },
      { house: "Slytherin", points: 10, text: "Potions" }
    ]
  },
  {
    question: "De quel bois est composé votre baguette ?",
    coverImage: "https://i.ibb.co/f9KjXL0/oliwander-wand-a-wizard-magic-wand-from-harry-potter-hogwarts-core-Glitters-Bokeh-backlighting-Trans.png",
     answers: [
      { house: "Gryffindor", points: 10, text: "d'If - appropié pour les sorts de persuasion et de valorisation" },
      { house: "Hufflepuff", points: 10, text: "de Saule blanc - idéal pour les sorts de soins" },
      { house: "Ravenclaw", points: 10, text: "de Frêne - excellent pour la magie psychique" },
      { house: "Slytherin", points: 10, text: "d'Ebène - parfaite pour la magie des ombres et des charmes " }
    ]
  },
  {
    question: "Quel est votre Patronus ? (La projection magique qui vous défend contre les forces obscures ) ",
    coverImage: "https://i.ibb.co/100skrT/a-ghost-patronus-animal-all-translucent-hogwarts-core-Glitters-Bokeh-backlighting-Translucide-biolum.webp",
     answers: [
      { house: "Gryffindor", points: 10, text: "Un Accogryffe" },
      { house: "Hufflepuff", points: 10, text: "Une armée de Niffleurs" },
      { house: "Ravenclaw", points: 10, text: "Un Sombral" },
      { house: "Slytherin", points: 10, text: "Une Tisseuse mortelle " }
    ]
  },
  {
    question: "Après les cours, vos amis et vous allez boire un verre... ",
    coverImage: "https://i.ibb.co/7GsRRPj/a-tavern-with-magic-potions-on-the-bar-ar-the-first-plan-there-is-a-cabaret-stage-on-the-background.png",
     answers: [
      { house: "Gryffindor", points: 10, text: "A la Licorne Cocue - Légendaire pour ses fêtes nocturnes et ses concours de bras de fer" },
      { house: "Hufflepuff", points: 10, text: "Au Balais Tordu - Une taverne populaire et chaleureuse, réputée pour son cidre au beurre" },
      { house: "Ravenclaw", points: 10, text: "Au Piccadilly - Elegant établissement, prisé pour ses concerts de musique magique" },
      { house: "Slytherin", points: 10, text: "Au Fumeur d'Obsidienne - Un bar secret dans lequel on peut savourer des potions... très spéciales" }
    ]
  },
  {
    question: "Quel est votre moyen de transport préféré ?",
    coverImage: "https://i.ibb.co/PgQG5QY/a-person-passes-through-a-magic-portal-hogwarts-core-Glitters-Bokeh-backlighting-Translucide-biolumi.webp",
     answers: [
      { house: "Gryffindor", points: 10, text: "Les Portoloin: Objet téléporteur ensorcelé. Nauséeux mais rapide" },
      { house: "Hufflepuff", points: 10, text: "Le Floo-network: Un grand réseau de cheminées reliées entre elles" },
      { house: "Ravenclaw", points: 10, text: "Le Transplanage: Technique de téléportation très pointue, elle fait son petit effet" },
      { house: "Slytherin", points: 10, text: "Les Amulettes: Necessitant quelques pots de vins pour en obtenir, elles mènent aux endroits cachés" }
    ]
  },
  {
    question: "Quel est votre hobby préféré ? ",
    coverImage: "https://i.ibb.co/xYjmZrw/a-magical-plant-greenhouse-where-botany-lessons-take-place-Hogwarts-carnivore-giant-plants-the-Raven.webp",
     answers: [
      { house: "Gryffindor", points: 10, text: "La lutte levitationelle" },
      { house: "Hufflepuff", points: 10, text: "Le tricot chantant" },
      { house: "Ravenclaw", points: 10, text: "le cache-cache astral" },
      { house: "Slytherin", points: 10, text: "Le poker télépathique" }
    ]
  },
  {
     question: "Quel est le parfum que vous portez ?",
    coverImage: "https://i.ibb.co/6gFrWws/an-antic-roman-bottle-perfum-vial-hogwarts-core-Glitters-Bokeh-backlighting-Translucide-bioluminesce.webp",
     answers: [
      { house: "Gryffindor", points: 10, text: "Eclat d'Audace" },
      { house: "Hufflepuff", points: 10, text: "Caresse Dorée" },
      { house: "Ravenclaw", points: 10, text: "Délice de Sérénité" },
      { house: "Slytherin", points: 10, text: "Venin Obscur" }
    ]
  }, 
  {
     question: "C'est le bal de fin d'année, que faites vous ? ",
    coverImage: "https://i.ibb.co/Gpfj0w5/a-prom-bal-people-are-dancing-together-beautiful-magical-dresses-very-high-structure-gothic-church-h.webp",
     answers: [
      { house: "Gryffindor", points: 10, text: "Vous organisez les jeux du bal et attribuez le titre de roi et reine de l'école" },
      { house: "Hufflepuff", points: 10, text: "Vous faites des jeux d'alcool avec vos amis proches" },
      { house: "Ravenclaw", points: 10, text: "Vous révisez vos partiels de fin d'année entre deux danses de bal" },
      { house: "Slytherin", points: 10, text: "Vous vous occupez de lançer des paris" }
    ]
  }
];

function showQuestion() {
  // Mélange les maisons 
  shuffleArray(quizData[currentQuestion].answers);
  // mise a jour de ImgCover
  document.getElementById('imgCover').src = quizData[currentQuestion].coverImage;

  const questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = `
    <div class="question">
      <p>${quizData[currentQuestion].question}</p>
      ${quizData[currentQuestion].answers.map(answer => `
        <label>
          <input type="radio" name="answer" value="${answer.house}">
          ${answer.text} 
        </label>
      `).join('')}
    </div>
  `;
}

function nextQuestion() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    answers.push(selectedAnswer.value);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  } else {
    alert("Hop hop hop, sélectionnez une réponse s'il vous plaît");
  }
}

function assignHouse() {
  const housePoints = { "Gryffindor": 0, "Hufflepuff": 0, "Ravenclaw": 0, "Slytherin": 0 };

  // Parcoure chq réponse et ajoute des points en fonction de la maison associée 
  answers.forEach(selectedAnswer => {
    quizData.forEach(question => {
      question.answers.forEach(answer => {
        if (answer.house === selectedAnswer) {
          housePoints[answer.house] += answer.points;
        }
      });
    });
  });

  // Trouve la maison avec le plus de points
  let winningHouse = '';
  let maxPoints = -1;

  for (const house in housePoints) {
    if (housePoints[house] > maxPoints) {
      maxPoints = housePoints[house];
      winningHouse = house;
    }
  }

  return winningHouse;
}

function showResult() {
  const quizContainer = document.getElementById('quiz-container');
  const questionContainer = document.getElementById('question-container');
  const nextBtn = document.getElementById('next-btn');

  quizContainer.removeChild(questionContainer);
  nextBtn.style.display = 'none';

  const resultContainer = document.getElementById('result-container');
  resultContainer.style.display = 'block';

  const resultText = document.getElementById('result-text');
  const winningHouse = assignHouse();

  // Texte de fin pour chaque maison
  let finalResultText = "";
  let titre = document.getElementById('titre');
  
  switch (winningHouse) {
    case 'Gryffindor':
      titre.innerText =`Bienvenue à Gryffindor ${nomUtilisateur}!`;
      finalResultText = `Bienvenue dans la salle de Gryffondor ${nomUtilisateur}. Ici, les trophées de Quidditch, de Lutte Lévitationnelle et autres sports ornent les murs. Bientôt votre nom y figurera, vous en faites la promesse. À la Licorne Cocue, votre repaire, vous êtes déjà le champion des tournois de bras de fer, surnommé 'le biceps de l'Accogryffe' en raison de votre Patronus. Votre charme vous pousse à vous entourer d'une large bande d'amis, et vous êtes le soutien motivant sur lesquels ils peuvent toujours compter. D'ailleurs, vous êtes déjà recruté pour organiser les jeux du bal de fin de trimestre. Vous comptez bien utiliser votre baguette en bois d'If pour accomplir des merveilles et vous parfumer de votre fragrance préférée, 'Éclat d'Audace', qui vous vaut toujours quelques invitations à sortir . N'oubliez pas votre Portoloin glissé par votre mère dans votre poche, en cas de coup dur, vous filer toujours lui faire une petite bise.`;
 imgCover.src="https://i.ibb.co/LSPbKPq/Gryffondor-aesthetic-house-room-people-chilling-around-de-litplace-mystical-magical-atmosphere-high.webp";
      break;
    case 'Hufflepuff':
      titre.innerText =`Bienvenue à Poufsouffle ${nomUtilisateur}!`;
      finalResultText = `Bienvenue dans la chaleureuse salle commune de Poufsouffle ${nomUtilisateur}. Installez-vous confortablement avec vos camarades pour réviser les premiers cours de Soins aux Créatures Magiques, accompagné d'une bonne bière au beurre. Votre fidèle petit Niffleur vient se lover sur vos genoux. Après la session de révision, vous vous préparerez à rejoindre le Balais Tordu avec votre nouvelle bande d'amis, en empruntant la cheminée de la salle commune. Une fois votre tricot chantant rangé sous le lit, vous vous aspergez d'un pschitt de votre parfum signature 'Caresse Doré'. Vous êtes prêt à entammer cette première soirée en tant que nouvel élève de Poudlard, des papillons plein le ventre.`;
 imgCover.src="https://i.ibb.co/NCrF7HF/Hufflepuff-aesthetic-duplex-house-room-Canddles-everywere-mystical-magical-ceiling-with-clouds-plant.webp";
      break;
    case 'Ravenclaw':
      titre.innerText =`Bienvenue à Serdaigle ${nomUtilisateur}!`;
      finalResultText = `Bienvenue chez les Serdaigles ${nomUtilisateur}. Vous avez été choisi comme délégué de classe grâce à vos excellents résultats aux examens 'Étude d'un Moldu Amoureux'. L'atmosphère élégante de votre nouvelle maison vous enchante. Des collègues qui jouent du violoncelle à gousset vous invitent à leur concert ce soir au Piccadilly. Vous hésitez entre y assister et sortir en douce pour étudier les Sombrals sauvages du parc du château, une occasion de perfectionner vos compétences en Transplanage. Enfilant votre peignoir de soie bleue imprégné de votre parfum 'Délice de Sérénité', vous vous préparez un petit thé aux herbes astrales. Cette nouvelle année s'annonce prometteuse, vous le sentez.`;
      imgCover.src="https://i.ibb.co/X7fSfRq/The-room-with-the-crazy-stairs-at-Hogwarts-the-Ravenclaw-common-room-Glitters-Bokeh-Translucide-biol.webp";
      break;
    case 'Slytherin':
      titre.innerText =`Bienvenue à Serpentard ${nomUtilisateur}!`;
      finalResultText = `C'est une grande fierté d'avoir été admis, vous ${nomUtilisateur}, dans cette noble maison qu'est Serpentard. Ici, les résidents ont un véritable sens du style, et grâce à leur spécialité, la métamorphose, leurs visages semblent tous plus beaux les uns que les autres. Vous appréciez l'humour cynique de vos aînés qui vous félicitent pour le magnifique bois d'ébène ornant votre baguette et pour la fragrance envoûtante de votre parfum 'Venin Oscur'. Certains jouent au poker télépathique, d'autres fument de l'obsidienne, mais vous préférez vous installer près de la fenêtre offrant une vue imprenable sur le lac. Vous faites tourner votre amulette de téléportation secrète entre vos doigts et devinez déjà quels avantages elle pourrait vous conférer. Cette année, vous brillerez par vos prouesses.`;
      imgCover.src="https://i.ibb.co/ryFSxNX/Slytherin-living-room-duplex-house-room-Canddles-everywere-mystical-magical-high-ceiling-with-clouds.png";
      break;
    default:
      titre.innerText = "Bienvenue à Poudlard !";
      resultText.textContent = "Bienvenue à Poudlard !";
  }

  resultText.textContent = finalResultText;
}