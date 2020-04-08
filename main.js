// Hamburger menu: mostrare / nascondere il menu principale (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).


// Stiliamo la variabile che potremo riutilizzare


var hamburger = $('.hamburger-menu');


// Metodo - 1 
  // Uso del metodo predefinito di jQuery Show and Hide.

// $('.header-right > a').click(function() {
// hamburger.show();
// })

// $('.hamburger-menu > a').click(function() {
//   hamburger.hide();
//   })

// Metodo - 2 
  //Uso del metodo di aggiunta e rimozione di una classe di jQuery (precedentemnete stilata in css)  .
  
$('.header-right > a').click(function() {
  hamburger.addClass('active');
  })
  
  $('.hamburger-menu > a').click(function() {
    hamburger.removeClass('active');
    })
  