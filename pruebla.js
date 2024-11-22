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
            <td>${etiqueta}</td>
            <td><button class="btn btn-success" onclick="Editarcon(this)">EDITAR</button>
            <button class="btn btn-danger" onclick="Eliminar(this)">ELIMINAR</button>
         </td> `;
        document.getElementById("txnom").value = " ";
        document.getElementById("txtel").value = " ";
        document.getElementById("txcor").value = " ";
        document.getElementById("txet").value = " ";
    } else {
        alert("No dejar espacios vacios")
    }
}

//Para buscar
document.getElementById("bus").addEventListener("input", function() {
        var bu = this.value.toLowerCase(); 
        var tabla = document.getElementById("cuerpo");
  
        Array.from(tabla.rows).forEach(row => {
          var nombre = row.cells[0].innerText.toLowerCase();
          row.style.display = nombre.includes(bu) ? "" : "none";});
   });

//Para Eliminar
function Eliminar(button) {
    var elim = button.parentNode.parentNode;
    elim.parentNode.removeChild(elim);
}

//Para Editar
function Editarcon(button) {
    var edit = button.parentNode.parentNode;

    document.getElementById("txnom").value = edit.cells[0].innerText;
    document.getElementById("txtel").value = edit.cells[1].innerText;
    document.getElementById("txcor").value = edit.cells[2].innerText;
    document.getElementById("txet").value = edit.cells[3].innerText;

    Eliminar(button);
  }


