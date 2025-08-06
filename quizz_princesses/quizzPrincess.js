let fenetreDiv = document.getElementById('fenetreDiv')
let questionDiv = document.getElementById('questionDiv')
let btnSuivant = document.getElementById('btnSuivant')
let imgCover = document.getElementById('imgCover')
const imgFemme = document.getElementById('femme')
const trophee = document.getElementById('trophee');
let pageAccueil = document.getElementById('accueil')

//bouton entrer 
let accueilDiv = document.getElementById('accueil')
let btnEntrer = document.getElementById('btnEntrer')


btnEntrer.addEventListener('click', () => {
  pageAccueil.style.display ="none"
  fenetreDiv.style.display ="block"
  btnSuivant.style.display ="block" 
  let body = document.querySelector('body');
  body.style.backgroundImage = 'url(https://i.pinimg.com/564x/39/68/1e/39681ec3548c8cdbd7548411956f78d9.jpg)'
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

// Colorer tous les labels associés aux boutons radio
const labels = document.querySelectorAll('label');

labels.forEach(label => {
  label.addEventListener('click', () => {
    labels.forEach(l => {
      l.classList.remove('labelSelected');
    });
    label.classList.add('labelSelected');
  });
});

//création des objets questions reponses 
const quizz = [
  {
    question :"Vous vous réveillez..." ,
    imgCover: "https://i.pinimg.com/564x/44/c2/17/44c217885c6c009b54f5ee203f8563ee.jpg",
    reponses: [
      {type : 'astral', points: 1, texte: "Au Collegium Palace", img: "https://i.pinimg.com/564x/d3/a3/0e/d3a30e90707061035251e313f0e3d3d2.jpg"},
      {type : 'celeste', points: 1, texte: "Au Palais de Luxor", img: "https://i.pinimg.com/564x/37/ee/eb/37eeebe3d5dd08e552866e873da725e7.jpg"},
      {type : 'charmes', points: 1, texte: "Aux bordures de l'Enchantaria", img: "https://i.pinimg.com/736x/71/96/96/71969674741cab51816aae0c9b2e8587.jpg"},
      {type : 'sylvestre', points: 1, texte: "Au Pavillon Royal", img: "https://i.pinimg.com/564x/2a/ce/26/2ace26259cdfd2e236dc4e295d1db117.jpg"},
      {type : 'ombres', points: 1, texte: "Au Manoir des Noctalis", img: "https://i.ibb.co/GtxJmpb/Celestial-salle-a-manger.jpg"},
    ]
  } , {
    question :"Dans votre chambre " ,
    imgCover: "https://i.pinimg.com/564x/5c/25/87/5c2587f1258bd872cc9be601bf61e3ed.jpg",
    reponses: [
      {type : 'astral', points: 1, texte: "Pleine de rêves fascinants ", img: "https://i.pinimg.com/736x/b5/6b/dd/b56bdd3e217d7e19ad089894af782848.jpg"},
      {type : 'celeste', points: 1, texte: "Pure et douillette", img: "https://i.pinimg.com/736x/88/55/f9/8855f9374bc94ee0a6a9a741b4965a12.jpg"},
      {type : 'charmes', points: 1, texte: "Coquette et parfumée", img: "https://i.pinimg.com/564x/f4/c6/da/f4c6dabc11ec9ecac69e0bf4a8aa274d.jpg"},
      {type : 'sylvestre', points: 1, texte: "Les animaux viennent y dormir", img: "https://i.pinimg.com/564x/d0/69/dd/d069dde1d399bc7a7fa6a7ba6365e556.jpg" },
      {type : 'ombres', points: 1, texte: "Un véritable cocon de calme", img: "https://i.pinimg.com/564x/57/f9/53/57f953d84a8573c7a8daaa04afc087fb.jpg"},
    ]
  } , {
    question :"Bloti auprès de votre animal" ,
    imgCover: "https://i.ibb.co/k2kMmd4/celestial-animal.jpg",
    reponses: [
      {type : 'astral', points: 2, texte: "Un Tigre Indien ", img: "https://i.pinimg.com/736x/e4/d6/c2/e4d6c2bed346381c4c2b1dd7c96ecf56.jpg"},
      {type : 'celeste', points: 2, texte: "Un Etalon des Nuages", img: "https://i.ibb.co/s9cpHDb/bd4b6e1860fd0c08ccbc700911a76091.jpg"},
      {type : 'charmes', points: 2, texte: "Une Renarde Rousse", img: "https://i.pinimg.com/564x/52/12/68/521268d878e0cb3dcacff5ee8b822b58.jpg"},
      {type : 'sylvestre', points: 2, texte: "Un Ours Géant", img: "https://i.pinimg.com/564x/ae/87/4f/ae874f29021bc3189a9a2a65b541e5a5.jpg" },
      {type : 'ombres', points: 2, texte: "Un Serpent Celeste", img: "https://i.pinimg.com/564x/ae/1d/10/ae1d10fe48e856c76b4032fc757d56cd.jpg"},
    ]
  } , {
    question :"Vous prenez votre petit déjeuner " ,
    imgCover: "https://i.pinimg.com/564x/af/05/8a/af058a1be152f20b820e24b0abd8a24d.jpg",
    reponses: [
      {type : 'astral', points: 1, texte: "Tarte Mystique aux Myrtilles ", img: "https://i.pinimg.com/736x/17/4c/12/174c12ec7a835219cfad5e7526dfccfb.jpg"},
      {type : 'celeste', points: 1, texte: "Charme de Citron Doré", img: "https://i.pinimg.com/736x/a3/45/aa/a345aa369d7684cd2400d0002b8746a6.jpg"},
      {type : 'charmes', points: 1, texte: "Gâteau de Fées Framboisées", img: "https://i.pinimg.com/564x/3d/3c/08/3d3c08eaaaa0395c240ed78db866a82c.jpg"},
      {type : 'sylvestre', points: 1, texte: "Rêve de Licorne à la Vanille", img: "https://i.pinimg.com/564x/a4/1c/7c/a41c7c7597a7f7afab0024b6ddac2115.jpg" },
      {type : 'ombres', points: 1, texte: "Sortilège de Chocolat Enchanté", img: "https://i.pinimg.com/564x/af/e4/4a/afe44a1f27f5baf801b7e3187cf923b1.jpg"},
    ]
  } , {
    question :"Avec votre boisson favorite" ,
    imgCover: "https://i.pinimg.com/736x/9c/d9/cd/9cd9cd3d3dbfe5b7b113d2e14892335d.jpg",
    reponses: [
      {type : 'astral', points: 1, texte: "Bulles de Sortilège ", img: "https://i.pinimg.com/564x/54/55/b2/5455b237bccb147ad1566290ccb916ed.jpg"},
      {type : 'celeste', points: 1, texte: "Élixir de Lune", img: "https://i.pinimg.com/564x/12/60/4f/12604f4da78dc651cf29eb0f6e70df7a.jpg"},
      {type : 'charmes', points: 1, texte: "Ambroisie Céleste", img: "https://i.pinimg.com/564x/9f/01/8d/9f018da69c428e9048ae8c4ab41c1de7.jpg"},
      {type : 'sylvestre', points: 1, texte: "Sorbet de Sérénité", img: "https://i.pinimg.com/564x/c6/b1/f9/c6b1f9a243c6f2dd88804e413bc69da6.jpg" },
      {type : 'ombres', points: 1, texte: "Chaudron Magique de Baies", img: "https://i.pinimg.com/564x/19/fd/1e/19fd1ea0b3fe74a8c4d4514a5d03913d.jpg"},
    ]
  } , {
    question :"On vous complimente souvent sur vos yeux " ,
    imgCover: "https://i.ibb.co/TMhQp3X/Celestial-rgos-plan.jpg",
    reponses: [
      {type : 'astral', points: 1, texte: "Violet ", img: "https://i.ibb.co/XXCW281/Astral-yeuxx.jpg"},
      {type : 'celeste', points: 1, texte: "Bleu ciel", img: "https://i.pinimg.com/564x/66/d2/59/66d259635c6df29b125fda6f96b3cb3a.jpg"},
      {type : 'charmes', points: 1, texte: "Rose", img: "https://i.pinimg.com/564x/46/f5/aa/46f5aac58f79800ed2a8e93df9c7c1af.jpg"},
      {type : 'sylvestre', points: 1, texte: "Turquoise", img: "https://i.pinimg.com/736x/2d/83/69/2d8369ed51bff573bc5c96e3caa548db.jpg" },
      {type : 'ombres', points: 1, texte: "Gris", img: "https://i.ibb.co/ZVw7DNJ/Celestial-11.jpg"},
    ]
  } , {
    question :"Le Prince vous emmène au bal" ,
    imgCover: "https://i.pinimg.com/564x/29/40/0c/29400c29604aa09eb86789de14425bf7.jpg",
    reponses: [
      {type : 'astral', points: 2, texte: "Aetherion ", img: "https://i.pinimg.com/564x/7c/b4/b0/7cb4b01b135b310910c9225531d68b3d.jpg"},
      {type : 'celeste', points: 2, texte: "Célestio", img: "https://i.ibb.co/TWytqhy/Celestial-ch-ri-1.jpg"},
      {type : 'charmes', points: 2, texte: "Magnus", img: "https://i.ibb.co/WyP6rjG/Charmes-ch-ri-1.jpg"},
      {type : 'sylvestre', points: 2, texte: "Claudius", img: "https://i.ibb.co/z5wrnwr/Sylvestre-ch-ri-1.jpg" },
      {type : 'ombres', points: 2, texte: "Evo", img: "https://i.ibb.co/5vZTBLS/Ombre-ch-ri.jpg"},
    ]
  } , {
    question :"Vous choisissez votre robe  " ,
    imgCover: "https://i.pinimg.com/564x/a0/3b/30/a03b30ad0b3fee0d7f31a8cb37b80b7b.jpg",
    reponses: [
      {type : 'astral', points: 1, texte: "Parrure d'Etoiles ", img: "https://i.pinimg.com/564x/43/9a/f0/439af08a59915591775a67d0e1e4b698.jpg"},
      {type : 'celeste', points: 1, texte: "Diamants de Soies", img: "https://i.pinimg.com/736x/ee/a6/7f/eea67f1097907fcddbcd0746f62ffdd0.jpg"},
      {type : 'charmes', points: 1, texte: "Douce Etreinte", img: "https://i.pinimg.com/736x/76/a8/d2/76a8d2aed6ff3c852ce1dff2e412ffbe.jpg"},
      {type : 'sylvestre', points: 1, texte: "Voiles d'Émeraude", img: "https://i.pinimg.com/564x/85/78/5c/85785c20b31d57abd01703e28f9d707d.jpg" },
      {type : 'ombres', points: 1, texte: "Brume Nocturne", img: "https://i.pinimg.com/564x/66/8a/54/668a5425926f16c43adc0b3f668ccde8.jpg"},
    ]
  } , {
    question :" Puis vos chaussures " ,
    imgCover: "https://i.pinimg.com/564x/80/70/2b/80702b501e1bee1f90ca964d88e9e49c.jpg",
    reponses: [
      {type : 'astral', points: 1, texte: "Etoile filante ", img: "https://i.pinimg.com/736x/1a/1c/cf/1a1ccfd007b9880505f0b46e45df1cff.jpg"},
      {type : 'celeste', points: 1, texte: "Valse blanches", img: "https://i.pinimg.com/564x/b6/ea/77/b6ea77dc09d45dfbe945f5016744a453.jpg"},
      {type : 'charmes', points: 1, texte: "Deux Temps Dorés", img: "https://i.pinimg.com/564x/50/af/f2/50aff2e9df2636fa98bda9721802b42e.jpg"},
      {type : 'sylvestre', points: 1, texte: "Ailes Dansantes", img: "https://i.pinimg.com/564x/cd/30/e2/cd30e212a8213caf3727916284469967.jpg" },
      {type : 'ombres', points: 1, texte: "Reflet d'Antant", img: "https://i.pinimg.com/564x/a4/f6/b5/a4f6b5ae2eaca3153e89ed657bfbcc60.jpg"},
    ]
  } , {
    question :" Votre couple d'amis vous rejoint " ,
    imgCover: "https://i.pinimg.com/564x/8e/38/97/8e389778b2452ce7abcf25be36bb3d87.jpg",
    reponses: [
      {type : 'astral', points: 2, texte: "Paulina & Bordo ", img: "https://i.ibb.co/pdYdffW/7b322efe886b3d43bb877dd1cddfb427.jpg"},
      {type : 'celeste', points: 2, texte: "Roya & Vivianus", img: "https://i.ibb.co/ZTZFZ1y/4a9e413558a6a3158f1d8c4e98f374f9.jpg"},
      {type : 'charmes', points: 2, texte: "Jaczie & Batophet", img: "https://i.ibb.co/Bwk3Lyq/9c1a4a138ad4a16f389d311497167d7e.jpg"},
      {type : 'sylvestre', points: 2, texte: "Silvide & Jean ", img: "https://i.ibb.co/J2rPpZL/3b642aa2c1627363f506028e083ebf25.jpg" },
      {type : 'ombres', points: 2, texte: "Adeline & Olphéo", img: "https://i.ibb.co/ccps9b0/40fc4a8a13783dccc01d5371a6bbee80.jpg"},
    ]
  } , {
    question :" Ils vous offrent un parfum " ,
    imgCover: "https://i.pinimg.com/564x/62/85/7f/62857f180392f869033c7eaf326995a9.jpg",
    reponses: [
      {type : 'astral', points: 1, texte: "Echoes ", img: "https://i.pinimg.com/736x/85/d1/72/85d17295788edde9e97af6eab3aa88c0.jpg"},
      {type : 'celeste', points: 1, texte: "Danse Envoutante", img: "https://i.pinimg.com/564x/3f/c9/98/3fc998a8e87bf8bcb429b03f74b047aa.jpg"},
      {type : 'charmes', points: 1, texte: "Douceur de fée", img: "https://i.pinimg.com/736x/50/dc/38/50dc38d63a7ef6fd58dec407f1efc878.jpg"},
      {type : 'sylvestre', points: 1, texte: "Litige Amonium ", img: "https://i.pinimg.com/564x/62/35/06/623506f48b414aa5daefbef581685bff.jpg" },
      {type : 'ombres', points: 1, texte: "Sucrerie fumée", img: "https://i.pinimg.com/564x/14/e5/40/14e5402d610518f511b2959f8064aeb1.jpg"},
    ]
  } , {
    question :"Vous vous amusez au bal" ,
    imgCover: "https://i.pinimg.com/564x/fa/6c/49/fa6c49f71dccc979b5c85028e9b8e1ad.jpg",
    reponses: [
      {type : 'astral', points: 1, texte: "Une voyante vous prédit votre avenir ", img: "https://i.pinimg.com/564x/5f/49/c4/5f49c463531f29784da5cd7c800d79f3.jpg"},
      {type : 'celeste', points: 1, texte: "Vous faites toutes les danses", img: "https://i.pinimg.com/564x/72/75/4c/72754c1befc4e60143b9c42605fb6f50.jpg"},
      {type : 'charmes', points: 1, texte: "Vous faites un tour de mongole fière", img: "https://i.pinimg.com/564x/55/d3/30/55d3301ae5d9c59fa7ff2358ef07bb00.jpg"},
      {type : 'sylvestre', points: 1, texte: "Vous goûtez les amuses-bouche", img: "https://i.pinimg.com/564x/e0/59/d1/e059d1f797c91d90e2c89c79a5cb8253.jpg" },
      {type : 'ombres', points: 1, texte: "Vous jouez pour les convives", img: "https://i.ibb.co/VxS8gty/Charmes-musiques.jpg"},
    ]
  } , {
    question :"Le Prince vous offre un bijoux de fiancailles" ,
    imgCover: "https://i.pinimg.com/564x/52/f7/7c/52f77c8fca6c3ab7655ea1ced6b0016b.jpg",
    reponses: [
      {type : 'astral', points: 1, texte: "Honorable Eclat ", img: "https://i.pinimg.com/564x/d4/53/66/d45366ab809666fdb0f086856fda2e21.jpg"},
      {type : 'celeste', points: 1, texte: "Extasine", img: "https://i.pinimg.com/564x/e5/a9/7a/e5a97ab4be722896091288fea2b4490e.jpg"},
      {type : 'charmes', points: 1, texte: "Murmure de rubis", img: "https://i.pinimg.com/564x/ca/be/b9/cabeb9aa9f9ea61f5dfe0932f1a9cee7.jpg"},
      {type : 'sylvestre', points: 1, texte: "Brillance des mers", img: "https://i.pinimg.com/564x/bb/cb/a6/bbcba69603e382a1bfa93ccc03fb0337.jpg" },
      {type : 'ombres', points: 1, texte: "Charme Sacré", img: "https://i.pinimg.com/564x/03/70/b0/0370b0bceb21d21fab412b5d1c1e0e8d.jpg"},
    ]
  } , {
    question :"Enfin, l'Oracle vous attribue votre pouvoir" ,
    imgCover: "https://i.pinimg.com/736x/53/de/0c/53de0cf92bc430618d100b3f03ea1bfe.jpg",
    reponses: [
      {type : 'astral', points: 2, texte: "Lire l'avenir dans les étoiles ", img: "https://i.pinimg.com/564x/e1/c9/05/e1c9058e46493cb626dfb0551b412704.jpg"},
      {type : 'celeste', points: 2, texte: "Soigner toutes les maladies", img: "https://i.pinimg.com/736x/b5/b6/6a/b5b66ae8d7b6aa296b3773a435e8934c.jpg"},
      {type : 'charmes', points: 2, texte: "Exaucer les voeux d'autrui", img: "https://i.pinimg.com/564x/f7/4e/7e/f74e7e5ffc2ccdcececdaaee157a2b04.jpg"},
      {type : 'sylvestre', points: 2, texte: "Entendre parler les animaux", img: "https://i.pinimg.com/564x/c0/05/d8/c005d8cdc0a0cb65a09bb6f3e4a31f49.jpg" },
      {type : 'ombres', points: 2, texte: "Se teleporter", img: "https://i.pinimg.com/564x/e8/20/c4/e820c46407fc485b8b5e70513336d605.jpg"},
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
    <p class="questionTitre">${quizz[questionActuelle].question}</p><hr>
      ${quizz[questionActuelle].reponses.map(answer => `
        <label>
          <input type="radio" name="reponse" value="${answer.type}">
          ${answer.texte}
        </label>
      `).join('')}
  `;
  
  // Colorer tous les labels associés aux boutons radio. Est également appelé a lexterieur de cette fonction, ca double c'est embetant. Trouver comment regler ça 
const labels = document.querySelectorAll('label');

labels.forEach(label => {
  label.addEventListener('click', () => {
    labels.forEach(l => {
      l.classList.remove('labelSelected');
    });
    label.classList.add('labelSelected');
  });
});
  
  //change l'imgCover ajoute un effet de transition au click
document.querySelectorAll('input[name="reponse"]').forEach(input => {
  input.addEventListener('click', () => {
    const reponseChoisie = input.value;
    if (questionActuelle < quizz.length) {
      const reponseObj = quizz[questionActuelle].reponses.find(reponse => reponse.type === reponseChoisie);
      if (reponseObj) {
        imgCover.src = reponseObj.img;
        
        // Ajoutez la classe si elle n'est pas présente, sinon supprimez-la
        imgCover.classList.toggle('princessEffect');
        
        // Ajoutez un écouteur d'événements pour détecter la fin de l'animation
        imgCover.addEventListener('animationend', () => {
          imgCover.classList.remove('princessEffect');
        }, { once: true }); // Utilisez { once: true } pour que l'écouteur ne soit appelé qu'une seule fois
      } else {
        console.error('Objet de réponse non trouvé');
      }
    }
  });
});

}

// J'ai ajouté changer l ImgCover et Ajouter Glitch a l'interieur ET a l'exterieur pour que ça fonctionne sur la page d'accueil et aussi lors de l'evenement Bouton suivant. Trouver comment arranger ça 

  //change l'imgCover ajoute un effet de transition au click
document.querySelectorAll('input[name="reponse"]').forEach(input => {
  input.addEventListener('click', () => {
    const reponseChoisie = input.value;
    if (questionActuelle < quizz.length) {
      const reponseObj = quizz[questionActuelle].reponses.find(reponse => reponse.type === reponseChoisie);
      if (reponseObj) {
        imgCover.src = reponseObj.img;
        
        // Ajoutez la classe si elle n'est pas présente, sinon supprimez-la
        imgCover.classList.toggle('princessEffect');
        
        // Ajoutez un écouteur d'événements pour détecter la fin de l'animation
        imgCover.addEventListener('animationend', () => {
          imgCover.classList.remove('princessEffect');
        }, { once: true }); // Utilisez { once: true } pour que l'écouteur ne soit appelé qu'une seule fois
      } else {
        console.error('Objet de réponse non trouvé');
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
    alert ("Faites votre choix, Princesse ")
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
  const pointsParTypes = {"astral": 0, "celeste": 0, "charmes": 0, "sylvestre": 0, "ombres": 0,} 
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
  const signature = document.getElementById('signature');
  signature.style.display ='block'
  
  fenetreDiv.removeChild(questionDiv);
  btnSuivant.style.display = "none";
  imgCover.style.display = "none";
  
    
  const resultatDiv = document.getElementById('resultatDiv');
  resultatDiv.style.display = 'block';

  const resultatTxt = document.getElementById('resultatTxt');
  const typeGagnant = attribueType();

  // Texte de resultat pour chaque types
  let resultatTitre = document.getElementById('resultatTitre');
  switch (typeGagnant) {
      
    case "astral":
      resultatTitre.innerText = 'Vous êtes la princesse Astrale';
      resultatTxt.innerText = " L'oracle a parlé. Après vous avoir longtemps observé, elle vous a reconnu ! Vous êtes la Princesse Astrale. Héritière d'une bibliothèque astronomique que vos brillants parents ont créé, vous portez avec fierté le flambeau en tant que grande oracle céleste, prodiguant conseils et sagesse. Votre mariage avec le prince sera organisé par vos amis la semaine prochaine. Puissiez-vous continuer à illuminer le firmament de votre grâce astrale. Longue vie à la reine Astrale. ";
      imgFemme.src = "https://i.pinimg.com/564x/c9/92/b0/c992b068ac35addb3095634656b04b68.jpg";
      trophee.src ="https://i.pinimg.com/564x/cc/ec/a3/cceca3a072b4b0e8e2b0f8c3b69b79f3.jpg"
      break;
    case "celeste":
      resultatTitre.innerText = 'Vous êtes la princesse Celeste';
      resultatTxt.innerText = "L'oracle a parlé. Après vous avoir longtemps observé, elle vous a reconnu ! Vous êtes la Princesse Celeste. Votre connexion au soleil et votre grâce naturelle font de vous la guide éclairée du royaume, et la plus grande souveraine de ces lieux. Aux côtés de votre prince et de vos amis, vous résidez à présent dans le palais des quatres soleil, produiguant à tous votre bonté d'âme. Longue vie à la reine Celeste !";
      imgFemme.src = "https://i.pinimg.com/564x/67/48/3f/67483fc2da21f1390d752a31c0ed5bbc.jpg"; trophee.src="https://i.pinimg.com/564x/c1/ea/85/c1ea855e464416bf52806c6617e3dbd5.jpg"
      break;
    case "charmes":
      resultatTitre.innerText = 'Vous êtes la princesse des Charmes';
      resultatTxt.innerText = "L'oracle a parlé. Après vous avoir longtemps observé, elle vous a reconnu ! Vous êtes la Princesse des Charmes. Votre talent pour tisser des enchantements joyeux et votre esprit espiègle apportent une touche réconfortante de magie à vos proches et à votre royaume. Résidant avec vos amis et votre Prince dans le magnifique royaume fleuri, vous répandez l amour et les sourires autour de vous. Longue vie à vous, reine de la joie et des plaisirs !";
      imgFemme.src = "https://i.pinimg.com/564x/49/63/0f/49630f9b04fe8fb1778ed9ce93149601.jpg";
      trophee.src="https://i.pinimg.com/564x/0b/86/b4/0b86b4fb8ca16af95dabf157e9cb8203.jpg"
      break;
    case "sylvestre":
      resultatTitre.innerText = 'Vous êtes la princesse Sylvestre';
      resultatTxt.innerText = "L'oracle a parlé. Après vous avoir longtemps observé, elle vous a reconnu ! Vous êtes la Princesse Sylvestre. L'oracle dévoile votre statut de Gardienne des Cieux Verdoyants. Votre lien profond avec la nature et votre talent à préserver les beautés de Dame Nature font de vous une protectrice de ce royaume éternel. Aux côtés de votre prince et de vos amis, chaque citoyens murmurent sur votre bienveillance et votre beauté. Puissiez vous prospérer au cœur du royaume des cieux. Longue vie à la reine de la nature !";
      imgFemme.src = "https://i.pinimg.com/564x/9a/d0/e2/9ad0e2eaf5aacddb048355c3bece1219.jpg"; trophee.src="https://i.pinimg.com/564x/cb/cf/e8/cbcfe863d05ceec00087e21a4dc7c5c1.jpg"
      break;
    case "ombres":
      resultatTitre.innerText = 'Vous êtes la princesse des Songes ';
      resultatTxt.innerText = "L'oracle a parlé. Après vous avoir longtemps observé, elle vous a reconnu ! Vous êtes la Princesse des Songes. Votre capacité à réconcilier les gens est remarquable. Votre magnétisme inspire respect et fascination à tous vos citoyens. Grâce à vous, la paix règne, les peurs s'effacent. Avec votre Prince et vos amis, vous vivez heureuse. Votre règne sera empreint du courage qui est le votre. Longue vie à la belle Reine des Songes.";
      imgFemme.src = "https://i.pinimg.com/564x/cf/5c/59/cf5c59e0f38a010dfeab8e5b83f63c87.jpg"; trophee.src="https://i.pinimg.com/736x/ac/5d/9a/ac5d9a3f64f27bf30bd4b843ecbd7751.jpg"
      break;
    default:
      resultatTitre.innerText = "Princesse";
      resultatTxt.innerText = "";
  }
 }