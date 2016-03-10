/**
 * Created by Cubero on 09/03/2016.
 */
(function(){

    $(document).ready(function(){
        var menu = document.querySelector('.hamburger');

// method
        function toggleMenu (event) {
            this.classList.toggle('is-active');
            document.querySelector( ".menuppal" ).classList.toggle("is_active");
            event.preventDefault();
        }

// event
        menu.addEventListener('click', toggleMenu, false);

//Solución con jQUery
        /*$(document).ready(function(){
         $('.hamburger').click(function() {
         $('.hamburger').toggleClass('is-active');
         $('.menuresponsive').toggleClass('is-active');
         return false;
         });
         });*/


        $('#btn-qs').click(function(){
            $('html,body').animate({scrollTop: - ($('#tituloweb').height()+ $('#quiensoy').height()+$('#mishabilidades').height())},1000 );
        });
        $('#btn-mh').click(function(){
            $('html,body').animate({scrollTop: $('#quiensoy').height()},1000 );
        })
        $('#btn-mr').click(function(){
            $('html,body').animate({scrollTop: $('#tituloweb').height()+ $('#quiensoy').height()+$('#mishabilidades').height()},1000);
        })


    });
})()