document.addEventListener('mousemove', function(e) {
    if (window.innerWidth >= 600) {
        var curseur = document.querySelector('.curseur');
        curseur.style.left = e.clientX + 'px';
        curseur.style.top = e.clientY + 'px';
    }
});

const photoProfil = document.getElementById('photo-profil');
photoProfil.addEventListener('mouseover', function() {
  if (window.innerWidth >= 600) {
      document.querySelector('.curseur').style.backgroundImage =" url('https://www.svgrepo.com/show/438960/shy-face.svg')"
  }
});
photoProfil.addEventListener('mouseout', function() {
  if (window.innerWidth >= 600) {
      document.querySelector('.curseur').style.backgroundImage =" url('https://www.svgrepo.com/show/438961/smiling-face-with-smiling-eyes.svg')"
  }
});


const divProjects = document.querySelectorAll('.project');
divProjects.forEach(function(project) {
    project.addEventListener('mouseover', function() {
        if (window.innerWidth >= 600) {
            document.querySelector('.curseur').style.backgroundImage = "url('https://www.svgrepo.com/show/438959/smiling-face-with-halo.svg')";
        }
    });
    
    project.addEventListener('mouseout', function() {
        if (window.innerWidth >= 600) {
            document.querySelector('.curseur').style.backgroundImage = "url('https://www.svgrepo.com/show/438961/smiling-face-with-smiling-eyes.svg')";
        }
    });
});

const logoVoir = document.querySelector('.logo-voir')
logoVoir.addEventListener('mouseover', function(){
   if (window.innerWidth >= 600) {
      document.querySelector('.curseur').style.backgroundImage =" url('https://www.svgrepo.com/show/438965/face-with-tongue.svg')"
  }
})

logoVoir.addEventListener('mouseout', function(){
   if (window.innerWidth >= 600) {
      document.querySelector('.curseur').style.backgroundImage =" url('https://www.svgrepo.com/show/438961/smiling-face-with-smiling-eyes.svg')"
  }
})

document.addEventListener("DOMContentLoaded", function() {
  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {
    project.addEventListener("click", function() {
      const projectId = this.getAttribute("data-title"); 
      showModal(projectId);
    });
  });

  function showModal(projectId) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalImg = document.getElementById('modal-img');
    const modalLink = document.getElementById("modal-link");

    modal.style.display = "block";
    switch (projectId) {
  case "Projet tarotMarseille":
    modalTitle.textContent = "";
    modalDescription.textContent = "Posez votre question aux Astres en essayant ce tirage du tarot de Marseille";
    modalImg.src = "https://i.ibb.co/3cmdBXv/Capture-d-cran-2024-02-13-092845.png";
    modalLink.href = "https://codepen.io/BambieLou/full/JjzaxGb";
    break;
  case "Projet NeoStrate":
    modalTitle.textContent = "";
    modalDescription.textContent = "Dans un univers Cyberpunk, découvrez quel résident de NeoStrate city vous êtes en répondant à ce quizz. Plutôt corpo ou bio-conspirateur ? ";
    modalImg.src = "https://i.ibb.co/hKW6MdS/Capture-d-cran-2024-02-13-093351.png";
    modalLink.href = "https://codepen.io/BambieLou/full/YzgQBVL";
    break;
  case "Projet choixpeau":
    modalTitle.textContent = "";
    modalDescription.textContent = "Quelle maison le choixpeau va-t-il vous attribuer ? Jouez à ce quizz Harry Potter pour le savoir.";
    modalImg.src = "https://i.ibb.co/yBPg0SK/Capture-d-cran-2024-02-13-144425.png";
    modalLink.href = "https://codepen.io/BambieLou/full/RwdVPLm";
    break;
      case "Projet Princess":
        modalTitle.textContent ="";
        modalDescription.textContent ="Un petit quizz créé pour ma nièce. Quelle princesse êtes vous ? Celeste , Sylvestre, Astrale, des Charmes ou des Songes ?";
        modalImg.src ="https://i.ibb.co/QfPtR4H/Capture-d-cran-2024-02-13-141908.png";
        modalLink.href = "https://codepen.io/BambieLou/full/wvOpjza"
  break;
        case "Projet sefirotTarot":
        modalTitle.textContent ="";
        modalDescription.textContent ="Jeu de tirage de carte divinatoire avec les cartes du jeu Sefirot illustré par Eliot Baum & Viv Tanner ";
        modalImg.src ="https://i.ibb.co/ZWGm395/Capture-d-cran-2024-02-13-143648.png";
        modalLink.href = "https://codepen.io/BambieLou/full/zYbmwPq"
        break;
  default:
    break;
}

    const closeModal = document.querySelector(".modal");
    closeModal.addEventListener("click", function() {
      modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
      if (event.target === modal) {
      }
    });
    
    modalLink.addEventListener("click", function(event) {
  event.preventDefault();
  window.open(this.href, '_blank');
});

  }
});