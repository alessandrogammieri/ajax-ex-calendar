/* Creare un calendario dinamico con le festività.
Partiamo dal gennaio 2018 dando la possibilità di cambiare mese,
gestendo il caso in cui l’API non possa ritornare festività.
Il calendario partirà da gennaio 2018 e si concluderà a dicembre
2018 (unici dati disponibili sull’API). */

$( document ).ready(function () {
  // Dichiaro una variabile con giorno fisso 1 Gennaio 2018
  var data = moment("2018-01-01");
  // Stampo Gennaio 2018
  $(".container h1").text(data.format("MMMM YYYY"));
  // Creo il clone del template con Handlebars
  var source = $("#template").html();
  var template = Handlebars.compile(source);
  // Dichiaro una variabile per il numero dei giorni in gennaio
  var days = moment("2018-01").daysInMonth();
  // Cicliamo per 31 volte
  for (var i = 1; i <= days; i++) {
    // Dichiaro un variabile con ogni giorno di Gennaio che cicla
    var mese = moment([2018, 0, i]).format("ddd DD MM YYYY");
    // Stampo l'input a schermo
    var context = {giorno: mese, holi: moment([2018, 0, i]).format("YYYY-MM-DD")};
    $(".giorni ul").append(template(context));
  }

  // Richiediamo via ajax all'API le festività di Gennaio
  $.ajax({
    url : "https://flynn.boolean.careers/exercises/api/holidays",
    method: "GET",
    data: {"year": "2018", "month": 0},
    success: function (data) {
      if (data.success) {
        // Dichiaro una variabile con i risultati della chiamata
        var holiday = data.response;
        // Cicliamo il nostro elenco delle festività
        for (var i = 0; i < holiday.length; i++) {
          // Creiamo una variabile per singola festività
          var objholiday = holiday[i];
          // Creiamo una variabile per identificare l'attributo nell'html
          var hellfest = $("li[dateref='" + objholiday.date + "']");
          if (hellfest) {
            hellfest.append(", " + objholiday.name);
            hellfest.addClass("orange");
          }
        }
      }
    },
    error: function (errore) {
      alert ("C'è stato un errore: " + errore);
    }
  });

});
