const questionInput = document.getElementById('question-input');
const entrerBtn = document.getElementById('entrer-button');
let resultat = document.getElementById('resultat');


function lancerTirage () {  
  
  resultat.innerHTML = '';
  
  const question = questionInput.value.trim()
  if(question === '') {
    resultat.innerHTML = `<p class="petitTexte">Les astres n'ont pas bien entendu votre question</p>`;
    return
  }
  
  const cartesMelangees = melangerCartes(arcanesMajeures)
  
  for (let i = 0 ; i < 3; i++) {
    const carte = cartesMelangees[i];
    afficherCarte(carte);
  }
}

questionInput.addEventListener('keydown', (e)=>{
  if(e.key === "Enter") {
    lancerTirage()
  }
})

entrerBtn.addEventListener('click', ()=>{
  lancerTirage()
})

function melangerCartes(cartes){
  return cartes.sort(()=> Math.random()-0.5);
}

function afficherCarte(carte) {
  const carteDiv = document.createElement('div');
  carteDiv.classList.add('carte');
  carteDiv.dataset.description = carte.description;
  
  const image = document.createElement('img'); 
  image.src = carte.image;
  image.alt = carte.nom;
  
  carteDiv.appendChild(image);
  resultat.appendChild(carteDiv);
}

const arcanesMajeures = [
  { nom : "le Mat", 
  image : "https://i.pinimg.com/564x/ec/c3/e3/ecc3e3dbecee92a721b5b729a3984076.jpg", 
  description : "Imprudence, Egarement"},
  {nom : "Le Bateleur ", 
  image : "https://i.pinimg.com/564x/22/e2/a0/22e2a04aaca2f4bb9545c09677c3f122.jpg",
  description : "Talent, Initiative"},
  {nom : "la Papesse", 
  image : "https://i.pinimg.com/564x/2d/00/17/2d00171f2f10ec9cb6f4f519d1ac36b4.jpg",
  description : "La gestation, le mystère"},
  { nom : "l'Impératrice'", 
  image : "https://i.pinimg.com/736x/cd/77/0d/cd770d3be8cdb67fee0249b3196e5fe8.jpg",
  description : "L'intelligence, la révélation"},
  {nom : "l'Empereur", 
  image : "https://i.pinimg.com/564x/73/66/70/736670feb7bc2feed00406e4974fe73c.jpg",
  description : "L'équilibre matériel"},
  {nom : "Le Pape ", 
  image : "https://i.pinimg.com/564x/06/e1/73/06e1730c660f22a52fc3946c86a13fc8.jpg",
  description : "La protection, la spiritualité"},
  {nom : "L'amoureux ", 
  image : "https://i.pinimg.com/564x/d0/bb/b2/d0bbb20c4fcf19cdea7531d2b1655921.jpg",
  description : "le choix, l'attraction"},
  {nom : "Le chariot ", 
  image : "https://i.pinimg.com/564x/5c/48/28/5c48284e37fde490f10cfe8b5d22462f.jpg",
  description : "la conquête, l'évolution"},
  {nom : "La Justice ", 
  image : "https://i.pinimg.com/564x/69/6b/12/696b1268ca4e6f96473da24c37e68d43.jpg",
  description : "L'équilibre, le verdict"},
  {nom : "L'Hermite ", 
  image : "https://i.pinimg.com/564x/93/33/b2/9333b2ab054591bfe9419dac237686e4.jpg",
  description : "La sagesse, faire le point"},
  {nom : "La roue de fortune ", 
  image : "https://i.pinimg.com/564x/a6/b0/5a/a6b05aefbda4b0db8d285db0fcfcd737.jpg",
  description : "La chance, l'inéluctable"},
  {nom : "La Force ", 
  image : "https://i.pinimg.com/564x/be/e4/84/bee484ea8a4ef9784244344d03dddb8c.jpg",
  description : "Contrôle de ses pulsions, la vigueur"},
  {nom : "Le pendu ", 
  image : "https://i.pinimg.com/564x/c5/3f/b5/c53fb54198e9ca2b3146af14f4635bff.jpg",
  description : "L'impuissance, l'épreuve"},
  {nom : "La Mort ", 
  image : "https://i.pinimg.com/564x/a3/59/c6/a359c6c2380edf273168a95d04a0fd9c.jpg",
  description : "La déstruction, la délivrance"},
  {nom : "Temperance ", 
  image : "https://i.pinimg.com/564x/4c/da/9b/4cda9b2ca7d1801fbc56fb1c1e4bcaa1.jpg",
  description : "La patience, l'équilibre"},
  {nom : "Le Diable ", 
  image : "https://i.pinimg.com/564x/96/3d/93/963d93100058ebfac71a1589157bb7e3.jpg",
  description : "la séduction, la dépendance"},
  {nom : "La Tour ", 
  image : "https://i.pinimg.com/564x/ef/51/0d/ef510d10984194bc2f07521f1aaf0b75.jpg",
  description : "L'accident, la déconstruction "},
  {nom : "L Etoile ", 
  image : "https://i.pinimg.com/564x/06/33/56/0633565809dddd5b882868d734f5e965.jpg",
  description : "L'intuition, l'idéal"},
  {nom : "La Lune ", 
  image : "https://i.pinimg.com/564x/5c/de/92/5cde928d3c014c4a189f1ce164e8c61f.jpg",
  description : "L'ambiguité, l'instinct"},
  {nom : "Le Soleil ", 
  image : "https://i.pinimg.com/564x/ee/f4/ec/eef4ec4cb01d7aae4bb545488c6be70c.jpg",
  description : "L'illumination, l'amour"},
  {nom : "Le Jugement ", 
  image : "https://i.pinimg.com/736x/ce/da/66/ceda660802d9eeef686ca44ee88a61c5.jpg",
  description : "L'appel, le réveil"},
  {nom : "Le Monde ", 
  image : "https://i.pinimg.com/564x/c6/bc/bc/c6bcbcdef16fcdce34b78b28c53a9b81.jpg",
  description : "Le voyage, l'accomplissement final"},
]