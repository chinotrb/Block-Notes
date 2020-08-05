$(document).ready(inicializarEventos);

function inicializarEventos() {
  $("#add").click(agregarLista);
  $("#Remove").click(borar);
  $("#RemodeAll").click(borarTodo);
  $("#discard").click (remover);
  $("#jumbotron").dblclick(clic);
 

  recognizeKeyboard()

}
/*
function agregarLista() {

  $("#pending").append(" <input type=checkbox>" + $("#agregarobjeto").val() + "<br>");
  $("#agregarobjeto").val("");

}
}*/

function agregarLista() {

  $("#pending").append(" <input type=checkbox>"  + $(" #agregarobjeto").val() + "<br>");
  $("#agregarobjeto").val("");

}

function borarTodo() {
  let x = $("ul")
  x.empty();
}

function borar() {
$("#pending").remove('<input type="checkbox">');
console.log("borrar")
}

function remover(){
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            $("#result").html("Checkbox is checked.");
        }
        else if($(this).prop("checked") == false){
            $("#result").html("Checkbox is unchecked.");
        }
    });
}


function clic() {
  let x = $(" li");
  x.remove()
}


function recognizeKeyboard() {
  document.addEventListener('keydown', function (tecla) {

    if (tecla.keyCode == 13) {
      agregarLista()
      console.log("se a agrgado algo")
    }

  })
}


