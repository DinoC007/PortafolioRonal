//PAra el botn de inicio
const btninicio=document.getElementById('btn-ini');
const cont_inicio=document.querySelector('.cont-inicio');
//PAra el boton de formacion
const btnformacion=document.querySelector('#btn-experiencia');
const cont_formacion=document.querySelector('.cont-experiencia');
//Para el boton de experiencia
const btnproyectos=document.querySelector('#btn-proyectos');
const cont_proyecto=document.querySelector('.cont-proyectos');
//PAra el boton contacto
const btncontacto=document.querySelector('#btn-contacto');
const cont_contacto=document.querySelector('.cont-contacto');

/* btninicio.addEventListener('click',()=>{
    if(btninicio.classList.contains('hidden')){
        alert("hola")
    }
}) */
btninicio.addEventListener('click', () => {
    if (cont_inicio.classList.contains('hidden')) {
      cont_inicio.classList.remove('hidden');
      btninicio.classList.add('btn-trasparente');
    } else {
      cont_inicio.classList.add('hidden');
      btninicio.classList.remove('btn-trasparente');
    }
  });

  btnformacion.addEventListener('click',()=>{
    if (cont_formacion.classList.contains('hidden')) {
        cont_formacion.classList.remove('hidden');
        btnformacion.classList.add('btn-trasparente');
      } else {
        cont_formacion.classList.add('hidden');
        btnformacion.classList.remove('btn-trasparente');
      }
  });

  btnproyectos.addEventListener('click', ()=>{
    if (cont_proyecto.classList.contains('hidden')) {
        cont_proyecto.classList.remove('hidden');
        btnproyectos.classList.add('btn-trasparente');
      } else {
        cont_proyecto.classList.add('hidden');
        btnproyectos.classList.remove('btn-trasparente');
      }
  })
  btncontacto.addEventListener('click', ()=>{
    if (cont_contacto.classList.contains('hidden')) {
        cont_contacto.classList.remove('hidden');
        btncontacto.classList.add('btn-trasparente');
      } else {
        cont_contacto.classList.add('hidden');
        btncontacto.classList.remove('btn-trasparente');
      }
  })