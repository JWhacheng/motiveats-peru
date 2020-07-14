$(document).ready(function(){
  $('.toast').toast('show');


  var available = $("#available");
  var peruTime = new Date().toLocaleString("en-US", {timeZone: "America/Lima"});
  peruTime = new Date(peruTime);
  hourPeru = peruTime.getHours();

  if (hourPeru >= 23 || hourPeru < 6) {
    available.addClass("text-secondary");
  } else {
    available.addClass("text-success");
  }


  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
      }
  });




});

$("#btnCalcular").click(function(e) {
  e.preventDefault();

  var peso = $("#inputPeso").val();
  var estatura = $("#inputEstatura").val();
  var edad = $("#inputEdad").val();
  var sexo = $("#inputSexo").val();
  var actividad = $("#inputActividad").val();
  var objetivo = $("#inputObjetivo").val();

  var tasaMetabolica;
  if (sexo == 1) {
    tasaMetabolica = (10*peso) + (6.25*estatura) - (5*edad) + 5;
  } else {
    tasaMetabolica = (10*peso) + (6.25*estatura) - (5*edad) - 161;
  }

  var caloriasNecesarias;
  if (objetivo == 1) {
    if (actividad == 1) {

    } else if (actividad == 2) {

    } else if (actividad == 3) {

    } else if (actividad == 4) {

    } else {
      
    }

  } else if (objetivo == 2) {
    if (actividad == 1) {
      caloriasNecesarias = tasaMetabolica*1.2;
    } else if (actividad == 2) {
      caloriasNecesarias = tasaMetabolica*1.375;
    } else if (actividad == 3) {
      caloriasNecesarias = tasaMetabolica*1.55;
    } else if (actividad == 4) {
      caloriasNecesarias = tasaMetabolica*1.72;
    } else {
      caloriasNecesarias = tasaMetabolica*1.9;
    }
  } else {
    if (actividad == 1) {

    } else if (actividad == 2) {

    } else if (actividad == 3) {

    } else if (actividad == 4) {

    } else {
      
    }

  }

  $("#metabolismo").html(tasaMetabolica);
  $("#calorias").html(caloriasNecesarias);

});