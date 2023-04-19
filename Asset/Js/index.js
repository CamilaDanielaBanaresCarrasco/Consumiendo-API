
$.ajax({
  url: "https://digimon-api.vercel.app/api/digimon/",
  method: "GET",
  success: function(listaDeDigimon) {
    console.log(listaDeDigimon);
    
    for (var i = 0; i < listaDeDigimon.length; i++) {
      var cadaDigimon = listaDeDigimon[i];
      
      // Agregar una fila a la tabla
      var fila = $("<section> <br>");
      // Agregar las celdas a la fila
      fila.append($("<div>").html("<div class='text-center ' id='tituloDelDigimon'>"+ cadaDigimon.name +"</div>"));
      fila.append($("<div>").html("<div class='' id='imagenDelDigimon'>"+"<img class='border m-5 mb-0 mt-0' src='" + cadaDigimon.img + "' alt='" + cadaDigimon.name + "'>"+"</div>"));
      fila.append($("<div>").html("<div class='text-center mb-5' id='niveleDelDigimon'>"+ cadaDigimon.level +"</div>"));
      
      // Agregar la fila a la tabla
      $("#digimon").append(fila);
  
    } 
  },
});

function buscarDigimon() {
  var inputText = $("#searchInput").val().toLowerCase();
  $("#digimon").empty();

  $.ajax({
    url: "https://digimon-api.vercel.app/api/digimon/",
    method: "GET",
    success: function(listaDeDigimon) {
      for (var i = 0; i < listaDeDigimon.length; i++) {
        var cadaDigimon = listaDeDigimon[i];

        if (cadaDigimon.name.toLowerCase().includes(inputText)) {
          var fila = $("<section> <br>");
          fila.append($("<div>").html("<div class='text-center ' id='tituloDelDigimon'>"+ cadaDigimon.name +"</div>"));
          fila.append($("<div>").html("<div class='' id='imagenDelDigimon'>"+"<img class='border m-5 mb-0 mt-0' src='" + cadaDigimon.img + "' alt='" + cadaDigimon.name + "'>"+"</div>"));
          fila.append($("<div>").html("<div class='text-center mb-5' id='niveleDelDigimon'>"+ cadaDigimon.level +"</div>"));
          $("#digimon").append(fila);
        }
      } 
    },
  });
}


$(document).ready(function() {
  $(".imagenDeCodigo").click(function() {
    if ($(this).hasClass("ampliada")) {
      $(this).animate({width: "50%"}, 1000);
      $(this).removeClass("ampliada");
    } else {
      $(this).animate({width: "100%"}, 1000);
      $(this).addClass("ampliada");
    }
  });
});

function goBack() {
  window.history.back();
}