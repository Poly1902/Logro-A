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
            <button class="btn btn-success btn-sm me-1" onclick="Editar(this)">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="Eliminar(this)">Eliminar</button>
          </td>`;
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
          row.style.display = nombre.includes(bu) ? "" : "none";
        });
   });

//Para Eliminar
function Eliminar(button) {
    var a = button.parentNode.parentNode;
    a.parentNode.removeChild(a);

    var d = Array.from(a.parentNode.children).indexOf(a);
    if (d > -1) contacts.splice(d, 1);
  }

