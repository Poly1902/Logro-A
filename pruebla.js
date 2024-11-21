function Guardarin(){
    var nombres = document.getElementById("txnom").value;
    var celular = document.getElementById("txtel").value;
    var correo = document.getElementById("txcor").value;
    var etiqueta = document.getElementById("txet").value;
    if(nombres&&celular&&correo&&etiqueta){
        var tabla = document.getElementById("cuerpo");
        var guarda = tabla.insertRow();
        guarda.innerHTML = `
            <td>${nombres}</td>
            <td>${celular}</td>
            <td>${correo}</td>
            <td>${etiqueta}</td>`;
        document.getElementById("txnom").value = " ";
        document.getElementById("txtel").value = " ";
        document.getElementById("txcor").value = " ";
        document.getElementById("txet").value = " ";
    } else {
        alert("No dejar espacios vacios")
    }
}

document.getElementById("bus").addEventListener("input", function() {
        var bu = this.value.toLowerCase(); 
        var tabla = document.getElementById("cuerpo");
  
        Array.from(tabla.rows).forEach(row => {
          const nombre = row.cells[0].innerText.toLowerCase();
          row.style.display = nombre.includes(bu) ? "" : "none";
        });
   });
