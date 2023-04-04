const menuBar =document.querySelector(".menu-bar");
//Para Mostrar Menu
const contentmenu=document.querySelector('.menu-responsy')


const menuperfil=document.querySelector('#menu-perfil')
const central=document.querySelector('.central')

const menuformacion=document.querySelector('#menu-formacion')
const contentformacion=document.querySelector('.content-formacion')

const menuExperiencia=document.querySelector('#menu-Experiencia')
const contentexp=document.querySelector('.content-exp')

menuBar.addEventListener('click', () => {
    if (contentmenu.classList.contains('hidden')) {
      contentmenu.classList.remove('hidden');
      
    } else {
      contentmenu.classList.add('hidden');
      
    }
  });

  menuperfil.addEventListener('click', () => {
    if (central.classList.contains('hidden')) {
        contentmenu.classList.add('hidden');
      central.classList.remove('hidden');
      contentformacion.classList.add('hidden')
      contentexp.classList.add('hidden');
      
    } else {
      central.classList.add('hidden');
      
    }
  });




  menuformacion.addEventListener('click', () => {
    if (contentformacion.classList.contains('hidden')) {
        contentmenu.classList.add('hidden');
      contentformacion.classList.remove('hidden');
      central.classList.add('hidden')
      contentexp.classList.add('hidden');
      
    } else {
      contentformacion.classList.add('hidden');
      
    }
  });

  menuExperiencia.addEventListener('click', () => {
    if (contentexp.classList.contains('hidden')) {
        contentmenu.classList.add('hidden');
      contentexp.classList.remove('hidden');
      central.classList.add('hidden')
      contentformacion.classList.add('hidden');
      
    } else {
      contentexp.classList.add('hidden');
      
    }
  });