function mostrarSeccion(id) {
    document.querySelectorAll('.contenido').forEach(seccion => {
        seccion.style.display = 'none';
    });

    const seccionMostrar = document.getElementById(id);
    if (seccionMostrar) {
        seccionMostrar.style.display = 'block';
    }
}


const botones = document.querySelectorAll('.toggle-btn');
  const infos = document.querySelectorAll('.info');

  botones.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const info = infos[index];
      const visible = info.style.display === 'block';
      info.style.display = visible ? 'none' : 'block';
    });
  });

 
  
  function mostrarTodoYImprimir() {
    // Selecciona todos los elementos ocultos que quieres mostrar antes de imprimir
    const secciones = document.querySelectorAll('.info, .contenido');

    secciones.forEach(seccion => {
      seccion.style.display = 'block';
    });

    // Opcional: espera un breve momento antes de imprimir
    setTimeout(() => {
      window.print();
    }, 500);
  }

  function verificarClave() {
    const clave = "Alejo300870%"; // La clave que quieres poner
    const claveIngresada = document.getElementById("clave").value;

    if (claveIngresada === clave) {
        // Si la clave es correcta, muestra el contenido y oculta la pantalla de acceso
        document.getElementById("acceso").style.display = "none";
        document.getElementById("contenido").style.display = "block";
    } else {
        // Si la clave es incorrecta, muestra un mensaje
        alert("Clave incorrecta. Inténtalo de nuevo.");
    }
}
