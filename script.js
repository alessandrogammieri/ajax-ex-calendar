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







});
