
//obtener los elementos
var path=document.getElementById("img_path")
var description=document.getElementById("img_description")

var boton=document.getElementById("save")
var lista=document.querySelector("ul")


//asignamos una funcion al boton save
boton.addEventListener("click", function(){
  var  descripcion=description.value

var li=document.createElement("li")

li.textContent=descripcion

lista.appendChild(li) 
})
