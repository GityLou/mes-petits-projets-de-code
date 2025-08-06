// Oracle card deck
const deck = [
  {
    name: 'Le Faucheur',
    image: 'https://i.pinimg.com/736x/4b/e7/58/4be75809779a71ac944cb49f141be2a6.jpg',
    meaning: 'Soyez ferme et ne faites aucune concession. Le destin et sa fatalité vous répondront bien assez vite.'
  },
  {
    name: 'L\'Infinie',
    image: 'https://i.pinimg.com/736x/59/95/56/599556085dd67c1fe2a78a338686249b.jpg',
    meaning: 'Patience et perseverance vous apporteront la réussite. Continuer de travailler, tout ce que vous créez aujourd\'hui façonne votre futur.'
  },
  {
    name: 'L\'Exploratrice',
    image: 'https://i.pinimg.com/736x/74/5f/87/745f87a3acc27ae860d5bae6ddd371bb.jpg',
    meaning: ' Continuez à chercher l\'introuvable. Explorez, creusez et découvrez ce que personne n\'ose imaginer.'
  },
  {
    name: 'La Feline',
    image: 'https://i.pinimg.com/736x/28/51/ff/2851ffc5942a19f7b1278c65b4aa9f6c.jpg',
    meaning: 'Protégez ce qui vous tient à cœur, et défendez-le avec grâce. Aujourd\'hui relaxez vous et faites une sieste.' 
  },
  {
    name: 'L\'Intuition',
    image: 'https://i.pinimg.com/736x/2d/f1/8a/2df18acdf5f55b1a1b4fc2fdb28fc4ed.jpg',
    meaning: 'N\'écoutez pas les voix extérieures : la vôtre est la plus sage de toutes.'
  },
  {
    name: 'Le Lithomancier',
    image: 'https://i.pinimg.com/736x/38/6e/27/386e27f9301bcbf56389fdd060503f93.jpg',
    meaning: 'Vous pouvez transformer toute matière en énergie. Osez voir grand et retroussez vous les manches pour travailler la matière brute.'
  },
  {
    name: 'L\'Amoureuse ',
    image: 'https://i.pinimg.com/736x/c3/84/77/c38477dcaccf705965dc7180b3836124.jpg',
    meaning: 'Prenez le temps de dire à vos proches à quel point vous les aimez. Passez du temps à vous chouchouter. Regardez-vous dans le miroir et dites-vous que vous êtes beau.'
  },
  {
    name: 'L\'Echo',
    image: 'https://i.pinimg.com/736x/f3/2b/b2/f32bb2a226157b281bc2896922e6f161.jpg',
    meaning: 'Tout ce que vous donnez, vous le recevrez multiplié. C\'est la loi des sorcières wiccanes, personne n\'y échappe.'
  },
  {
    name: 'Le Rythme',
    image: 'https://i.pinimg.com/736x/56/80/94/568094eb286171d226e7b79f3520ceda.jpg',
    meaning: 'Taisez vous et dansez sur le rythme du vent. Faites profitez aux autres votre vision unique du rythme et permettez leur de découvrir de nouvelles perspectives. '
  },
  {
    name: 'Le Chercheur',
    image: 'https://i.pinimg.com/736x/63/b7/d6/63b7d65c0b9501ab7cf97c525552786c.jpg',
    meaning: 'Continuez de chercher sans cesse... Surtout ce que vous pensez avoir déjà trouvé. '
  },
  {
    name: 'Le Chasseur de Reliques',
    image: 'https://i.pinimg.com/736x/8e/a4/7d/8ea47d41c4dc3e830653ef711b96d031.jpg',
    meaning: 'Partez à la recherche de ce que les autres ont oublié. Servez vous de vos ressources pour explorer et comprendre les mystères enfouis des mondes soutterains.'
  },
  {
    name: 'L\'Homme Fou',
    image: 'https://i.pinimg.com/736x/ce/9d/b4/ce9db4d4ba40973364c687fd99d7d91f.jpg',
    meaning: 'Libérez-vous de la raison, osez l absurde pour renaître de vos cendres. Et partez en festival.'
  },
  {
    name: 'La Dinosauresse',
    image: 'https://i.pinimg.com/736x/23/a8/da/23a8da32549aca99d5e92989a1e84800.jpg',
    meaning: 'Faites honneur à vos forces anciennes, elles protègent vos lendemains. Demandez conseil à vos grands parents. Et soyez résolument féroce.'
  },
  {
    name: 'Le Dresseur de Raie Manta',
    image: 'https://i.pinimg.com/736x/22/da/84/22da84f1d015efa6c87995d6c324bd6b.jpg',
    meaning: 'Dominez les courants imprévisibles, faites vous l\'ami des océans. Soyez doux, ferme, compatissant et continuez de perseverer sur la route de la bienveillance.'
  },
  {
    name: 'Le Voyageur',
    image: 'https://i.pinimg.com/736x/a9/de/8f/a9de8fbce983b336acbeac1952a5b803.jpg',
    meaning: 'Continuez de dépasser vos limites, ne craignez pas les embûches. Vous êtes capable de faire face à l\'inconnu. Réservez un billet pour l\'autre bout du monde dès aujourd\'hui.'
  },
  {
    name: 'L\'Artisan',
    image: 'https://i.pinimg.com/736x/8f/16/c1/8f16c154693feb767ec85b5e09dc9bd3.jpg',
    meaning: 'Façonnez votre monde de manière personnelle et unique. Ecoutez gentiment les conseils, mais ne les suivez pas. N\'en faites qu\'à votre tête et laissez votre folie s\'exprimer dans vos créations.'
  },
  {
    name: 'Le Barman',
    image: 'https://i.pinimg.com/736x/e0/8d/27/e08d278ec0b3c4508fd592912d23a7f4.jpg',
    meaning: 'Mélangez vos peines et vos joies : servez-les à ceux qui ont soif. Ne gardez pas tout pour vous, créez l\'alchimie grâce à vos emotions et offrez les au monde. '
  },
  {
    name: 'Le Mineur',
    image: 'https://i.pinimg.com/736x/5d/c5/61/5dc561740d8aa049a3ea7b4b010b708b.jpg',
    meaning: 'Creusez plus profond, là où les véritées sont enfouies. Refugiez vous dans le noir, sans un bruit pour reflechir a votre question. Laissez la émerger comme une source pure.'
  },
  {
    name: ' La Tireuse de Cartes ',
    image: 'https://i.pinimg.com/736x/d0/74/0d/d0740d66aad703b82131bfb636a15123.jpg',
    meaning: 'Lisez entre les lignes des événements, sans trembler. Laissez les voix vous parler mais ne prêtez  attention qu\'à votre coeur. '
  },
  {
    name: 'Le Charmeur de Serpents',
    image: 'https://i.pinimg.com/736x/0f/3e/69/0f3e696ffd12bf1d57e024411180f709.jpg',
    meaning: 'Apprivoisez vos peurs et vos malaises doucement et avec fermeté. Vous apprendez à les faire danser pour vous. Elles passeront d\'ennemis à fidèles protectrices.'
  },
  {
    name: 'Le Marin',
    image: 'https://i.pinimg.com/736x/c8/ea/ad/c8eaad291bf51313595978b253449d80.jpg',
    meaning: 'Laissez les marées porter vos incertitudes, fiez vous à la brise. Prenez les choses en main, et ecouter votre sixieme sens pour vous guider. Personne ne le fera mieux que vous.'
  },
  {
    name: 'L\'Empereur',
    image: 'https://i.pinimg.com/736x/72/cf/d6/72cfd685a8262b0cd224ff3d65edc944.jpg',
    meaning: 'Prenez place sur votre trône, guidez ceux qui sont perdus. Montrez leur vos visions uniques et faites les profiter de votre sagesse.'
  },
  {
    name: 'Le Colosse',
    image: 'https://i.pinimg.com/736x/ee/38/14/ee381424b92235bb2096331eceeb7e9d.jpg',
    meaning: 'Rien ne résiste à votre force tranquille. Continuez de vous endurcir, avec toute la bonté de votre grand coeur. Votre présence rassure. '
  },
  {
    name: 'Le Jongleur Pourfendeur',
    image: 'https://i.pinimg.com/736x/ff/df/ed/ffdfed7fc70721ac10036bf4c65cfb6a.jpg',
    meaning: 'Jonglez avec le chaos. Fabriquez le sublime à partir du risible. Et séparez vous sans aucune culpabilité de ce qui vous entrave, vous êtes la liberté incarnée. '
  },
  {
    name: 'Le 33',
    image: 'https://i.pinimg.com/736x/03/d4/aa/03d4aafd7f77c9300e6f67fcdd9ce0b5.jpg',
    meaning: 'Un nombre secret : l\'équilibre dans l\'inattendu. Trouvez votre propre chemin, celui qui n\'est dicté par personne.'
  },
  {
    name: 'Madame Velvet',
    image: 'https://i.pinimg.com/736x/ab/01/da/ab01da94518e31f6c9747a03284e68fd.jpg',
    meaning: 'Charmez avec douceur, voilez vos lames de velours. Madame Velvet vous encourage à développer votre charisme tout en affutant votre discernement. '
  },
  {
    name: 'Le Spinneur de Syntaxe',
    image: 'https://i.pinimg.com/736x/78/cf/e1/78cfe12d4e8ef87cf5e03275c142b932.jpg',
    meaning: 'Tordez les mots, révelez les vérités cachées. Rapprochez vous de ceux qui veulent apprendre, transmettez tout ce que vous connaissez et continuez de creer des vocations. '
  },
  {
    name: 'L\'Analyste',
    image: 'https://i.pinimg.com/736x/03/82/89/0382899d6c9db4210eb1debafab31c07.jpg',
    meaning: 'Décortiquez, questionnez, dévoilez le squelette des choses. N\'en dites pas trop mais gardez les yeux bien ouverts. Les gens comptent sur vos bon conseils. '
  },
  {
    name: 'Le Maître Phi',
    image: 'https://i.pinimg.com/736x/98/c9/ae/98c9ae2e628b7d1daa5bcbf8f9c75db9.jpg',
    meaning: ' Cherchez l\'harmonie du cosmos au milieu du désordre humain. Favorisez toute activité qui concentre votre attention, pour diminuer votre stress. Votre vivacité d\'esprit est grandement recherchée par vos pairs. '
  },
  {
    name: 'L\'Archeologue',
    image: 'https://i.pinimg.com/736x/2e/3e/e1/2e3ee1b44155371fc42afec5ecc6a5f3.jpg',
    meaning: 'Fouillez les ruines, exhumez vos trésors intérieurs. Ne vous cachez pas, dévoilez les parties de vous même qui vous semblent justes. Dépoussierez la morosité des autres grâce à votre energie inépuisable. '
  },
  {
    name: 'L\'Inventeur',
    image: 'https://i.pinimg.com/736x/ca/1b/26/ca1b26d5484a8ed45b6b54f9506f2c6a.jpg',
    meaning: 'Inspirez-vous de vos rêves pour fabriquer l\'inavouable. Continuez d\'explorer les probabilités, ne laissez jamais votre esprit s\'endormir. Tout ce que vous pensez, vous pouvez le créer à partir d\'aujourd\'hui.' 
  }
];

// Sélecteurs
const homepage = document.getElementById('homepage');
const gameInterface = document.getElementById('gameInterface');
const startGameBtn = document.getElementById('startGameBtn');
const questionForm = document.getElementById('questionForm');
const questionInput = document.getElementById('questionInput');
const drawBtn = document.getElementById('drawBtn');
const cardsDisplay = document.getElementById('cardsDisplay');
const restartBtn = document.getElementById('restartBtn');
const galleryBtn = document.createElement('button');
galleryBtn.textContent = 'Voir la Galerie';
galleryBtn.id = 'galleryBtn';
galleryBtn.className = 'gallery-btn';

const gallery = document.getElementById('gallery');
const galleryGrid = document.getElementById('galleryGrid');
const backToGameBtn = document.getElementById('backToGameBtn');

// Démarrer le jeu : cacher la page d'accueil, montrer l'interface
startGameBtn.addEventListener('click', () => {
  homepage.style.display = 'none';
  gameInterface.style.display = 'block';
  questionInput.value = '';
  cardsDisplay.innerHTML = '';
  restartBtn.style.display = 'none';
});

// Soumettre la question + tirer une carte
questionForm.addEventListener('submit', function(e) {
  e.preventDefault();
  drawCard();
});

function drawCard() {
  const shuffled = [...deck].sort(() => 0.5 - Math.random());
  const picked = shuffled[0];
  const afterCardButtons = document.getElementById('afterCardButtons');

restartBtn.style.display = 'inline-block';

if (!document.getElementById('galleryBtn')) {
  afterCardButtons.appendChild(galleryBtn);
}

  cardsDisplay.innerHTML = ''; 

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';

  // Flip container (just for the image)
  const flipInner = document.createElement('div');
  flipInner.className = 'flip-inner';

  // Face avant
  const front = document.createElement('div');
  front.className = 'card-front';
  const frontImg = document.createElement('img');
  frontImg.src = 'https://i.pinimg.com/736x/6f/ff/35/6fff35bfa321ed33a875f306cd9eb209.jpg';
  front.appendChild(frontImg);

  // Face arrière
  const back = document.createElement('div');
  back.className = 'card-back';
  const backImg = document.createElement('img');
  backImg.src = picked.image;
  backImg.alt = picked.name;
  back.appendChild(backImg);

  flipInner.appendChild(front);
  flipInner.appendChild(back);
  
  // Static content container
  const contentDiv = document.createElement('div');
  contentDiv.className = 'card-content';
  
  const name = document.createElement('h3');
  name.textContent = picked.name;
  
  const meaning = document.createElement('p');
  meaning.textContent = picked.meaning;
  
  contentDiv.appendChild(name);
  contentDiv.appendChild(meaning);

  cardContainer.appendChild(flipInner);
  cardContainer.appendChild(contentDiv); // Add static content after flip area
  cardsDisplay.appendChild(cardContainer);

  // Flip animation after a small delay
  setTimeout(() => {
    cardContainer.classList.add('flipped');
  }, 500);

  restartBtn.style.display = 'inline-block';
  drawBtn.textContent = 'Re-mélanger';
  
   if (!document.getElementById('galleryBtn')) {
      const buttonGroup = document.querySelector('#gameInterface .button-group');
      if (!buttonGroup) {
        const form = document.getElementById('questionForm');
        form.insertAdjacentElement('afterend', galleryBtn);
      } else {
        buttonGroup.appendChild(galleryBtn);
      }
    }
  }

// Gestionnaire pour le bouton galerie
galleryBtn.addEventListener('click', () => {
  gameInterface.style.display = 'none';
  gallery.style.display = 'block';
  loadGallery();
window.scrollTo({
  top: 0,
  behavior: 'smooth'
});
});

// Gestionnaire pour le bouton retour
backToGameBtn.addEventListener('click', () => {
  gallery.style.display = 'none';
  homepage.style.display = 'none';
  gameInterface.style.display = 'block';
  
  // Reset l'interface de jeu
  cardsDisplay.innerHTML = '';
  questionInput.value = '';
  restartBtn.style.display = 'none';
  drawBtn.textContent = 'Tirer une carte';
});

function loadGallery() {
  galleryGrid.innerHTML = '';

  deck.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'gallery-card';

    const img = document.createElement('img');
    img.src = card.image;
    img.alt = card.name;

    cardElement.appendChild(img);

    galleryGrid.appendChild(cardElement);
  });
}

const cardOverlay = document.getElementById('cardOverlay');

galleryGrid.addEventListener('click', function(e) {
  const card = e.target.closest('.gallery-card');
  if (!card) return;

  const img = card.querySelector('img');
  const cardName = img.alt;

  // Cherche la carte correspondante dans le deck
  const found = deck.find(c => c.name.trim() === cardName.trim());
  if (!found) return;

  // Remplir l'overlay
  cardOverlay.innerHTML = `
    <div class="overlay-content">
      <img src="${found.image}" alt="${found.name}">
      <h3>${found.name}</h3>
      <p>${found.meaning}</p>
    </div>
  `;

  cardOverlay.style.display = 'flex';
  setTimeout(() => {
    cardOverlay.classList.add('active');
  }, 10);
});

// Fermer au clic n'importe où
cardOverlay.addEventListener('click', () => {
  cardOverlay.classList.remove('active');
  setTimeout(() => {
    cardOverlay.style.display = 'none';
  }, 400);
});


// Bouton recommencer
restartBtn.addEventListener('click', () => {
  cardsDisplay.innerHTML = '';
  questionInput.value = '';
  restartBtn.style.display = 'none';
  drawBtn.style.display = 'inline-block';
  drawBtn.textContent = 'Tirer une carte';
});