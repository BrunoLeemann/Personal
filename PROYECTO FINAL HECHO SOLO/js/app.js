// Mi código JavaScript:

var miVueApp = new Vue({
  el: "#app",
  data: {
    cotizacionDolar: "",
    cars: "",
  },
});

addEventListener("load", function () {
  fetch("https://ha-front-api-proyecto-final.vercel.app/rates")
    .then(function (data) {
      return data.json();
    })

    .then(function (data) {
      console.log(data);
      miVueApp.cotizacionDolar = data.uyu;
      console.log(miVueApp.cotizacionDolar);
    });

  //.catch(function (error) {
  //alert(error);
  //});

  fetch("https://ha-front-api-proyecto-final.vercel.app/cars")
    .then(function (data) {
      return data.json();
    })

    .then(function (carList) {
      miVueApp.cars = carList;
    });
});

var btnVentas = document.getElementById("btn-ventaAutos");
var btnVentas2 = document.getElementById("btn-ventaAutos2");

function btnClick(btn) {
  window.location.href = "ventas.html";
}

btnVentas.addEventListener("click", btnClick);
btnVentas2.addEventListener("click", btnClick);
