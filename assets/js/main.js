
$(document).ready(ucitavanje);
function ucitavanje(){
  document.getElementById("dugme").addEventListener("click", proveri);
  /* pocetak koda za dinamicko ispisivanje menija */
  var meniHref = ["#", "#limuzine", "#suv", "#test"];
  var meniText = ["Početna", "Limuzine", "SUV", "Test vožnja"];
  var meniID = ["poc", "lim", "dzip", "voznja"];

  var meniIspis = `
    <ul class="navbar-nav ml-auto">
  `;
  for(var i in meniHref){
    meniIspis += `
    <li class="nav-item"><a class="nav-link" href="${meniHref[i]}" id="${meniID[i]}">${meniText[i]}</a></li>
    `;
  }
  meniIspis += "</ul>"
  $('#navigacija').html(meniIspis);
  $('#navigacija li a').addClass("bojaMeni");

  /* kraj koda za dinamicko ispisivanje menija */
  $('.nav-link').on('click', function(){
    $('.collapse').fadeOut();
  });
  $('.burger').on('click', function(){
    $('.collapse').fadeIn();
  });
  /* pocetak koda za animirani skrol do odredjenog dela strane */
  $('#navigacija ul li a').click(function(e){
    if($(this).prop('id') == 'lim'){
      e.preventDefault();
      $("html").animate({
        scrollTop: $("#limuzine").offset().top - 60
    }, 800);
    }
    if($(this).prop('id') == 'dzip'){
      e.preventDefault();
      $("html").animate({
        scrollTop: $("#suv").offset().top - 60
    }, 800);
    }
    if($(this).prop('id') == 'poc'){
      e.preventDefault();
      $("html").animate({
        scrollTop: 0
    }, 800);
    }
    if($(this).prop('id') == 'voznja'){
      e.preventDefault();
      $("html").animate({
        scrollTop: $("#test").offset().top - 60
    }, 800);
    }
  });
  
  /* kraj koda za animirani skrol do odredjenog dela strane */

  /*pocetak koda za dinamicko popunjavanje liste*/

  var nizAuto = ["Izaberite BMW model", "BMW 320d", "BMW 330d","BMW 330i", "BMW 520d", "BMW 540d xDrive", "BMW 530i", "BMW M550i xDrive", "BMW 740d", "X3 xDrive30d", "X3 M40i", "X5 M50d", "X5 xDrive40i", "X7 xDrive50i"];

  var ispisKola = "";

  for(var ind in nizAuto){
    ispisKola += `
      <option value="${ind}">${nizAuto[ind]}</option>
    `;
  }
  document.getElementById("listaKola").innerHTML = ispisKola;

  /* kraj koda za dinamicko popunjavanje liste */

  /* pocetak kod za dinamicki ispis fa-fa ikonica u foteru */

  var futerHref = ["https://www.facebook.com", "https://www.instagram.com", "https://twitter.com"];
  var futerClass = ["fa fa-facebook", "fa fa-instagram", "fa fa-twitter"];

  var ispis  = `
        <ul>
    `;
    for(var i in futerHref){
      ispis += `
          <li><a href="${futerHref[i]}"><i class="${futerClass[i]}"></i></a></li>
      `;
  }
  ispis += "</ul>";
  document.getElementById("futerIkone").innerHTML = ispis;

  /* kraj koda za dinamicki ispis fa-fa ikonica u futeru */

  /* pocetak koda za scroll to top */
  $("#scrollToTop").click(function(){

    $("html").animate({
        scrollTop: 0
    }, 1000);
  });

  $("#scrollToTop").hide();
  $(window).scroll(function(){
    let top = $(this)[0].scrollY;
    
    if(top > 300){
        $("#scrollToTop").show();
    } else {
        $("#scrollToTop").hide();
    }
  });
  $('#scrollToTop').hover(function(){
    this.style.cursor = "pointer";
  }, function(){
    this.style.cursor = "default";
  });
  /* kraj koda za skrol to top */

  /*   kad se misem predje preko linka, menja se pozadinska boja i smanjuje se opacity */

  $('.nav-link').hover(function(){
    $(this).stop(true, true);
    $(this).animate({
      opacity: "0.7"
  }, 300);
    $(this).css({backgroundColor: "#373d4b"});
  }, function(){
    $(this).stop(true, true);
    $(this).animate({
      opacity: "1.0"
  }, 300);
    $(this).css({backgroundColor: "#343a40"});
  })

  $('#navigacija:nth-child(2)').click(function(){
    $("html").animate({
        scrollTop: $("#limuzine").offset().top - 30
    }, 800);
})

  /*Pocetak koda za efekat zebre*/
  $('.table tbody tr:nth-child(even)').addClass("zebra").css('color', "#ffffff");
  $('.table tbody tr:nth-child(odd)').css('color', "#ffffff");
  $('.table thead tr').css('color', "#ffffff");

  /*Kraj koda za efekat zebre*/ 

  /* pocetak koda za efekat kad se predje misem preko slike, da se 'zamagli' */
    $(".container a img").hover(function(){
      $(this).stop(true, true);
      $(this).animate({
          opacity: "0.5"
      }, 300);
  }, function(){
      $(this).stop(true, true);
      $(this).animate({
          opacity: "1.0"
      }, 300); 
  });
  /* kraj */

  $(".container .vise").hover(function(){
    $(this).stop(true, true);
    $(this).css({color:"#2de9ff"});
    $(this).animate({
      opacity: "0.7"
    }, 300);
  }, function(){
    $(this).stop(true, true);
    $(this).animate({
      opacity: "1.0"
    }, 300);
  });




  document.getElementById("tabelaS3").classList.add("sakrij");
  document.getElementById("tabelaS5").classList.add("sakrij");
  document.getElementById("tabelaS7").classList.add("sakrij");
  document.getElementById("tabelaX7").classList.add("sakrij");
  document.getElementById("tabelaX5").classList.add("sakrij");
  document.getElementById("tabelaX3").classList.add("sakrij");
  $('opis').addClass("sakrij"); 

  var brojac3 = 0;

  /*Pocetak koda za sakrivanje i otkrivanje tabele*/ 

  $('#vise').click(function(event){
    event.preventDefault();
    if(brojac3 %2 == 0){
      $('#tabelaS3').fadeIn();
      $(this).html("Sakrij");
    }
    else{
      $('#tabelaS3').fadeOut();
      $(this).html("Prikaži više");
    }
    brojac3++;
  });
  var brojac5 = 0;

  $('#vise5').click(function(event){
    event.preventDefault();
    if(brojac5 %2 == 0){
      $('#tabelaS5').fadeIn();
      $(this).html("Sakrij");
    }
    else{
      $('#tabelaS5').fadeOut();
      $(this).html("Prikaži više");
    }
    brojac5++;
  });

  var brojac7 = 0;
  $('#vise7').click(function(event){
    event.preventDefault();
    if(brojac7 %2 == 0){
      $('#tabelaS7').fadeIn();
      $(this).html("Sakrij");
    }
    else{
      $('#tabelaS7').fadeOut();
      $(this).html("Prikaži više");
    }
    brojac7++;
  });

  var brojacx7 = 0;

  $('#visex7').click(function(event){
    event.preventDefault();
    if(brojacx7 %2 == 0){
      $('#tabelaX7').fadeIn();
      $(this).html("Sakrij");
    }
    else{
      $('#tabelaX7').fadeOut();
      $(this).html("Prikaži više");
    }
    brojacx7++;
  });
  var brojacx5 = 0;

  $('#visex5').click(function(event){
    event.preventDefault();
    if(brojacx5 %2 == 0){
      $('#tabelaX5').fadeIn();
      $(this).html("Sakrij");
    }
    else{
      $('#tabelaX5').fadeOut();
      $(this).html("Prikaži više");
    }
    brojacx5++;
  });

  var brojacx3 = 0;
  $('#visex3').click(function(event){
    event.preventDefault();
    if(brojacx3 %2 == 0){
      $('#tabelaX3').fadeIn();
      $(this).html("Sakrij");
    }
    else{
      $('#tabelaX3').fadeOut();
      $(this).html("Prikaži više");
    }
    brojacx3++;
  });

    /*Kraj koda za sakrivanje i otkrivanje tabele*/ 

  $('a[rel=serija3]').colorbox({
    transition: 'fade',
    speed: 400,
    current: "{current} of {total}"
  });
  $('a[rel=serija5]').colorbox({
    transition: 'fade',
    speed: 400,
    current: "{current} of {total}"
  });
  $('a[rel=serija7]').colorbox({
    transition: 'fade',
    speed: 400,
    current: "{current} of {total}"
  });
  $('a[rel=xserija3]').colorbox({
    transition: 'fade',
    speed: 400,
    current: "{current} of {total}"
  });
  $('a[rel=xserija5]').colorbox({
    transition: 'fade',
    speed: 400,
    current: "{current} of {total}"
  });
  $('a[rel=xserija7]').colorbox({
    transition: 'fade',
    speed: 400,
    current: "{current} of {total}"
  });

  $('#dugme').click(function(e){
    e.preventDefault();
  });


}
function proveri(){
  var ime = document.getElementById("ime").value;
  var prezime = document.getElementById("prezime").value;
  var telefon = document.getElementById("tel").value;
  var adresa = document.getElementById("adresa").value;
  var datum = document.getElementById("datum").value;
  var datumDanas = new Date();
  var datumDanasGod = datumDanas.getFullYear();
  var datumDanasMesec = datumDanas.getMonth() + parseInt("1");
  var datumDanasDan = datumDanas.getDate();
  var nizDatum = datum.split("-");
  var licna = document.getElementById("brLK").value;



  if(Number(nizDatum[0]) < datumDanasGod || Number(nizDatum[1]) < datumDanasMesec || Number(nizDatum[2]) < datumDanasDan){
    document.getElementById("datum").classList.remove("borderDobar");
    document.getElementById("datum").classList.add("borderGreska");
  } 
  else{
    document.getElementById("datum").classList.remove("borderGreska");
    document.getElementById("datum").classList.add("borderDobar");
  }

  var regexIme = /^[A-Z][a-z]+$/;
  if(!regexIme.test(ime)){
    document.getElementById("ime").classList.remove("borderDobar");
    document.getElementById("ime").classList.add("borderGreska");
  }
  else{
    document.getElementById("ime").classList.remove("borderGreska");
    document.getElementById("ime").classList.add("borderDobar");
  }

  var regexPrezime = /^[A-Z][a-z]+$/;
  if(!regexPrezime.test(prezime)){
    document.getElementById("prezime").classList.remove("borderDobar");
    document.getElementById("prezime").classList.add("borderGreska");
  }
  else{
    document.getElementById("prezime").classList.remove("borderGreska");
    document.getElementById("prezime").classList.add("borderDobar");
  }

  var regexTelefon = /^06[01234569]\/[\d]{6,7}$/;
  if(!regexTelefon.test(telefon)){
    document.getElementById("tel").classList.remove("borderDobar");
    document.getElementById("tel").classList.add("borderGreska");
  }
  else{
    document.getElementById("tel").classList.remove("borderGreska");
    document.getElementById("tel").classList.add("borderDobar");
  }

  var regexAdresa = /^([\w]+\s)+[\d]+$/;
  if(!regexAdresa.test(adresa)){
    document.getElementById("adresa").classList.remove("borderDobar");
    document.getElementById("adresa").classList.add("borderGreska");
  }
  else{
    document.getElementById("adresa").classList.remove("borderGreska");
    document.getElementById("adresa").classList.add("borderDobar");
  }

  var regexLicna = /^[\d]{9}$/;
  if(!regexLicna.test(licna)){
    document.getElementById("brLK").classList.remove("borderDobar");
    document.getElementById("brLK").classList.add("borderGreska");
  }
  else{
    document.getElementById("brLK").classList.remove("borderGreska");
    document.getElementById("brLK").classList.add("borderDobar");
  }

  if(document.getElementById("listaKola").value == 0){
    document.getElementById("listaKola").classList.remove("borderDobar");
    document.getElementById("listaKola").classList.add("borderGreska");
  }
  else{
    document.getElementById("listaKola").classList.remove("borderGreska");
    document.getElementById("listaKola").classList.add("borderDobar");
  }
}

/* Deo koda za plugin */

$(function() {
    $(".rslides").responsiveSlides({
        auto: true,             // Boolean: Animate automatically, true or false
        speed: 500,            // Integer: Speed of the transition, in milliseconds
        timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
        pager: false,           // Boolean: Show pager, true or false
        nav: false,             // Boolean: Show navigation, true or false
        random: false,          // Boolean: Randomize the order of the slides, true or false
        pause: false,           // Boolean: Pause on hover, true or false
        pauseControls: true,    // Boolean: Pause when hovering controls, true or false
        prevText: "Previous",   // String: Text for the "previous" button
        nextText: "Next",       // String: Text for the "next" button
        maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
        navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "",     // Selector: Declare custom pager navigation
        namespace: "rslides",   // String: Change the default namespace used
        before: function(){},   // Function: Before callback
        after: function(){}     // Function: After callback
      });
});