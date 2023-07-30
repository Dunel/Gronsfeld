function codificar() {
    const fraseInput = document.getElementById("frase");
    const claveInput = document.getElementById("clave");
    const fraseSinCodificar = fraseInput.value;
    const clave = parseInt(claveInput.value);
  
    // Verificar que la clave sea válida
    if (isNaN(clave) || clave <= 0){
      alert("Por favor, ingrese una clave válida (un número entero mayor que cero).");
      return;
    }
  
    // Encriptar la frase
    const fraseCodificada = encriptarGronsfeld(fraseSinCodificar, clave);
  
    // Mostrar los resultados
    document.getElementById("fraseSinCodificar").textContent = fraseSinCodificar;
    document.getElementById("claveCifrado").textContent = clave;
    document.getElementById("fraseCodificada").textContent = fraseCodificada;
    document.getElementById("frase").value = "";
    document.getElementById("clave").value = "";
  }
  
  function encriptarGronsfeld(frase, clave) {
    frase = frase.toUpperCase();
  
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 26
  
    let fraseCodificada = "";
  
    for (let i = 0; i < frase.length; i++) {
      const char = frase[i];
  
      const index = alfabeto.indexOf(char); // Verificar si el carácter actual está en el alfabeto
  
      if (index !== -1) {
        const nuevoIndex = (index + clave) % alfabeto.length; // Calcular el nuevo índice utilizando la clave de cifrado
        // Agregar el carácter codificado a la frase codificada
        fraseCodificada += alfabeto[nuevoIndex];
      } else {
        // Si el caracter no esta en el alfabeto, agregarlo tal cual a la frase codificada
        fraseCodificada += char;
      }
    }
  
    return fraseCodificada;
  }