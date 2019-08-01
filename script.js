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
  var days = moment("2012-01").daysInMonth();
  // Cicliamo per 31 volte
  for (var i = 1; i <= days; i++) {
    // Dichiaro un variabile con ogni giorno di Gennaio che cicla
    var mese = moment("2018-01-01").day(i).format("ddd DD MMMM YYYY");
    // Stampo l'input a schermo
    var context = {giorno: mese};
    $(".giorni ul").append(template(context));
  }

  




});
