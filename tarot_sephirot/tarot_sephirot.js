const pageAccueil = document.getElementById('page-accueil');
const pageTirage = document.getElementById('page-tirage');
const btnLancerTirage = document.getElementById('lancer-tirage');
const signature = document.getElementById('signature')

pageTirage.style.display = "none";

let imagesSelectionnees = 0;
let cartesMelangees = []; 
let cartesSelectionnees = []; 

btnLancerTirage.addEventListener('click', () => {
  pageAccueil.style.display = "none";
  pageTirage.style.display = "block";
  signature.style.display = "none";

  melangerEtAfficherTirage();
});

function melangerEtAfficherTirage() {
  cartesMelangees = melangerCartes(arcanesMajeures); 
  cartesSelectionnees = cartesMelangees.slice(0, 3);

  afficherTirage(cartesSelectionnees); 
}

function afficherTirage(cartes) {
  const images = pageTirage.querySelectorAll('img');
  const resultatParagraph = document.getElementById('resultat');

  images.forEach((image, index) => {
    image.src = "https://i.pinimg.com/564x/e7/51/82/e751828481e70c6de694c210d21f9696.jpg";
    image.addEventListener('click', () => {
      const carte = cartes[index];
      if (!image.classList.contains('clicked')) {
        image.src = carte.image;
        image.classList.add('clicked');
        imagesSelectionnees++;

        switch (index) {
          case 0:
            resultatPasse.innerHTML = carte.description;
            break;
          case 1:
            resultatPresent.innerHTML = carte.description;
            break;
          case 2:
            resultatFutur.innerHTML = carte.description;
            break;
          default:
            break;
        }
      } else {
        image.src = "https://i.pinimg.com/564x/e7/51/82/e751828481e70c6de694c210d21f9696.jpg";
        image.classList.remove('clicked');
        imagesSelectionnees--;
      }
    });
  });
}

function melangerCartes(cartes) {
  const cartesMelangees = [...cartes]; 
  for (let i = cartesMelangees.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartesMelangees[i], cartesMelangees[j]] = [cartesMelangees[j], cartesMelangees[i]];
  }
  return cartesMelangees;
}

function afficherResultat() {
  const pageTirage = document.getElementById('page-tirage');

  cartesSelectionnees.forEach(carte => {
    const resultatDiv = document.createElement('div');
    resultatDiv.classList.add('resultatTexte');
    const descriptionCarte = document.createTextNode(carte.description);
    resultatDiv.appendChild(descriptionCarte);
    pageTirage.appendChild(resultatDiv);
  });
}

const arcanesMajeures = [
  { nom : "le Mat", 
  image : "https://i.pinimg.com/564x/c4/93/c8/c493c8ba2d988c4a250ba5fa052ebb96.jpg", 
  description : `• SANTÉ : Risque d'imprudence ou de négligence.<br><br>
  • ARGENT : Instabilité financière, imprévoyance. <br><br>
  • AMOUR : Liberté, manque d'engagement.`},
  {nom : "Le Bateleur ", 
  image : "https://i.pinimg.com/564x/07/b7/5c/07b75c6c9332e523ca4e5804cb025514.jpg",
  description : `• SANTÉ : Vitalité, énergie.<br><br>
  • ARGENT : Opportunités financières, commerce. <br><br>
  • AMOUR : Communication, séduction.`},
  {nom : "la Papesse", 
  image : "https://i.pinimg.com/564x/51/65/81/516581d4a0544982213baa6f5815e7d4.jpg",
  description : `• SANTÉ : Intuition, écoute de son corps. <br><br>
  • ARGENT : Épargne, prudence financière. <br><br>
  • AMOUR : Secrets, spiritualité.`},
  { nom : "l'Impératrice'", 
  image : "https://i.pinimg.com/564x/c9/8d/ef/c98deff076902ed5ef669de92155d20f.jpg",
  description : `• SANTÉ : Fécondité, maternité.<br><br>
  • ARGENT : Abondance, prospérité. <br><br>
  • AMOUR : Douceur, maternité.`},
  {nom : "l'Empereur", 
  image : "https://i.pinimg.com/564x/c2/0e/e9/c20ee95142c85b39d889763ca2322649.jpg",
  description : `• SANTÉ : Autorité, leadership.<br><br>
  • ARGENT : Stabilité financière, gestion.<br><br>
  • AMOUR : Protection, sécurité.`},
  {nom : "Le Pape ", 
  image : "https://i.pinimg.com/564x/01/5d/1a/015d1afc6e5cc945a96dd5c4449bfbbf.jpg",
  description : `• SANTÉ : Spiritualité, Demander conseil au medecin.<br><br>
  • ARGENT : Aide financière, soutien.<br><br>
  • AMOUR : Tradition, mariage.`},
  {nom : "L'amoureux ", 
  image : "https://i.pinimg.com/564x/35/3c/f8/353cf857713381552199fd7211f824c3.jpg",
  description : `• SANTÉ : Choix, équilibre intérieur. <br><br>
  • ARGENT : Décisions financières importantes.<br><br>
  • AMOUR : Décision, relation amoureuse.`},
  {nom : "Le chariot ", 
  image : "https://i.pinimg.com/564x/f3/9e/1a/f39e1a318dc9978da9e4682f2c82fee8.jpg",
  description : `• SANTÉ : Victoire, surpassement des obstacles. <br><br>
  • ARGENT : Réussite, avancement financier. <br><br>
  • AMOUR : Triomphe, maîtrise émotionnelle. `},
  {nom : "La Justice ", 
  image : "https://i.pinimg.com/564x/1f/ef/b1/1fefb1cab9f8ac60a9b57077ece6a525.jpg",
  description : `• SANTÉ : Équilibre, Refaire le point sur ses habitudes.<br><br>
  • ARGENT : Équité, transactions justes.<br><br>
  • AMOUR : Équité, vérité dans les relations.`},
  {nom : "L'Hermite ", 
  image : "https://i.pinimg.com/564x/f7/28/ee/f728ee167772a73cf0c2d1b22df046a7.jpg",
  description : `• SANTÉ : Introspection, retraite pour se soigner. <br><br>
  • ARGENT : Prudence financière, économies. <br><br>
  • AMOUR : Solitude, recherche intérieure.`},
  {nom : "La roue de fortune ", 
  image : "https://i.pinimg.com/564x/26/12/d1/2612d1a9d8cf6b0759d6e1fb57cad706.jpg",
  description : `• SANTÉ : Changement, cycles de santé.<br><br>
  • ARGENT : Opportunités financières imprévues. <br><br>
  • AMOUR : Destin, tournant dans les relations.`},
  {nom : "La Force ", 
  image : "https://i.pinimg.com/736x/5a/a3/62/5aa362034bb425483d14d91acaba4816.jpg",
  description : `• SANTÉ : Courage, force intérieure. <br><br>
  • ARGENT : Contrôle financier, gestion.<br><br>
  • AMOUR : Passion, maîtrise des émotions.`},
  {nom : "Le pendu ", 
  image : "https://i.pinimg.com/564x/9d/ec/61/9dec61ecdbed47810ba788694ab60348.jpg",
  description : `• SANTÉ : Sacrifice, persévérance dans la guérison. <br><br>
  • ARGENT : Bloquage financier, nécessité de lâcher prise. <br><br>
  • AMOUR : Acceptation, détachement émotionnel.`},
  {nom : "La Mort ", 
  image : "https://i.pinimg.com/564x/06/a5/5b/06a55b7bb85f5bd06a4c2ccfd00b9618.jpg",
  description : `• SANTÉ : Transformation, renouveau dans la santé. <br><br>
  • ARGENT : Fin de quelque chose, nouvel investissement. <br><br>
  • AMOUR : Transition, fin et nouveau commencement.`},
  {nom : "Temperance ", 
  image : "https://i.pinimg.com/564x/f4/bc/be/f4bcbead035558d24a5c761893b6a3dc.jpg",
  description : `• SANTÉ : Équilibre, harmonie dans le corps.<br><br>
• ARGENT : Modération financière, gestion équilibrée.<br><br>
• AMOUR : Harmonie, équilibre dans les relations.`},
  {nom : "Le Diable ", 
  image : "https://i.pinimg.com/564x/b6/c2/87/b6c287e4107360f357cca1be45af3545.jpg",
  description : `• SANTÉ : Addictions, stress.<br><br>
• ARGENT : Attachement matériel, dette.<br><br>
• AMOUR : Tentation, passion intense.`},
  {nom : "La Tour ", 
  image : "https://i.pinimg.com/564x/ea/8c/a9/ea8ca962e93482e381c1981902cc145c.jpg",
  description : `• SANTÉ : Choc, crise de conscience.<br><br>
• ARGENT : Changement soudain, bouleversement.<br><br>
• AMOUR : Rupture, révélation brutale.`},
  {nom : "L Etoile ", 
  image : "https://i.pinimg.com/564x/a9/cd/a5/a9cda545a185c47304b3cabb04600af5.jpg",
  description : `• SANTÉ : Espoir, guérison spirituelle.<br><br>
• ARGENT : Inspiration financière, opportunité.<br><br>
• AMOUR : Renouveau, espoir dans les relations.`},
  {nom : "La Lune ", 
  image : "https://i.pinimg.com/736x/ac/2f/39/ac2f39dc49533dbc9e5d7259f657fdbf.jpg",
  description : `• SANTÉ : Illusions, troubles émotionnels.<br><br>
• ARGENT : Confusion financière, mystère.<br><br>
• AMOUR : Incertitude, révélations émotionnelles.`},
  {nom : "Le Soleil ", 
  image : "https://i.pinimg.com/736x/3f/88/8d/3f888debc5fc2bf96bf86f1c60629eda.jpg",
  description : `• SANTÉ : Vitalité, énergie abondante.<br><br>
• ARGENT : Succès financier, prospérité.<br><br>
• AMOUR : Clarté, bonheur dans les relations.`},
  {nom : "Le Jugement ", 
  image : "https://i.pinimg.com/564x/61/1a/2a/611a2a78f72a6163c73dd62b49b50b62.jpg",
  description : `• SANTÉ : Réveil, rétablissement spirituel.<br><br>
• ARGENT : Réexamen financier, jugement financier.<br><br>
• AMOUR : Révélation, renaissance relationnelle.`},
  {nom : "Le Monde ", 
  image : "https://i.pinimg.com/564x/e5/f1/f5/e5f1f5b1d864ce81cb91cbf73179d882.jpg",
  description : `• SANTÉ : Accomplissement, bien-être global.<br><br>
• ARGENT : Succès total, abondance.<br><br>
• AMOUR : Réalisation, union totale.`},
]

function rejouer() {
  pageAccueil.style.display = "block";
  pageTirage.style.display = "none";
  pageTirage.classList.remove('lancerTirage');

  const images = pageTirage.querySelectorAll('img');
  images.forEach(image => {
    image.src = "https://i.pinimg.com/564x/e7/51/82/e751828481e70c6de694c210d21f9696.jpg";
    image.classList.remove('clicked');
  });

  resultatPasse.textContent = "";
  resultatPresent.textContent = "";
  resultatFutur.textContent = "";

  const txtAccueil = document.getElementById('txtAccueil')
  txtAccueil.textContent="";
  txtAccueil.innerHTML =`Pensez à votre question<br>...`
   signature.style.display = "block";
  
  imagesSelectionnees = 0;

  melangerEtAfficherTirage(); 
  
}

const rejouerBtn = document.getElementById('rejouer')
rejouerBtn.addEventListener('click', ()=> {
  rejouer()
})