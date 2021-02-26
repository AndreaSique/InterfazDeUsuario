var botonDestacado, botonProyecto, botonBiografia;
botonDestacado = document.getElementById('destacado');
botonProyecto = document.getElementById('proyectos');
botonBiografia = document.getElementById('biografia');

var caja_Destacado, caja_Proyectos, caja_Biografia;
caja_Destacado = document.getElementById('cajaDestacado');
caja_Proyectos = document.getElementById('cajaProyectos');
caja_Biografia = document.getElementById('cajaBiografia');

function index(){
    cajaDestacado.classList.add("activar");
}
index();

botonDestacado.addEventListener("click", function(){
    caja_Destacado.classList.add("activar");
    caja_Proyectos.classList.remove("activar");
    caja_Biografia.classList.remove("activar");
      
});

botonProyecto.addEventListener("click", function(){
    caja_Proyectos.classList.add("activar");
    caja_Destacado.classList.remove("activar"); 
    caja_Biografia.classList.remove("activar");
   
});

botonBiografia.addEventListener("click", function(){
    caja_Biografia.classList.add("activar");
    caja_Destacado.classList.remove("activar"); 
    caja_Proyectos.classList.remove("activar");
   
});