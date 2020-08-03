$(document).ready(inicializarEventos);

function inicializarEventos() {
  $("#add").click(agregarLista);
  $("#Remove").click(borar);
  $("#RemodeAll").click(borarTodo);
  $("#jumbotron").dblclick(clic);

 recognizeKeyboard()

}
/*
function agregarLista() {

  $("ul").append("<li>" + $("#agregarobjeto").val() );
  $("#agregarobjeto").val("");

}*/

function agregarLista() {

  $("ul").append(" <input type=checkbox>" + $("#agregarobjeto").val() + "<br>" );
  $("#agregarobjeto").val("");

}

function borarTodo(){
  let x = $("ul")
  x.empty();
}

function borar() {
  let x = $("<input type=checkbox> " );
  x = x.eq(-1);
  x.remove();
}   
 
function clic(){
  let x = $(" li" );
  x.remove()
}


  function recognizeKeyboard() {
    document.addEventListener('keydown', function (tecla) {
  
      if (tecla.keyCode == 13) {
        agregarLista()
        console.log("se a agrgado algo")
    }
  
    })}

