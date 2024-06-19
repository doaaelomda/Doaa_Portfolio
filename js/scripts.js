/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

function makesvg(percentage, inner_text=""){

    var abs_percentage = Math.abs(percentage).toString();
    var percentage_str = percentage.toString();
    var classes = ""
  
    if(percentage < 0){
      classes = "danger-stroke circle-chart__circle--negative";
    } else if(percentage > 0 && percentage <= 30){
      classes = "warning-stroke";
    } else{
      classes = "success-stroke";
    }
  
   var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
       + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
       + '<circle class="circle-chart__circle '+classes+'"'
       + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
       + '<g class="circle-chart__info">'
       + '   <text class="circle-chart__percent" x="17.9" y="15.5">'+percentage_str+'%</text>';
  
    if(inner_text){
      svg += '<text class="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
    }
    
    svg += ' </g></svg>';
    
    return svg
  }
  
  (function( $ ) {
  
      $.fn.circlechart = function() {
          this.each(function() {
              var percentage = $(this).data("percentage");
              var inner_text = $(this).text();
              $(this).html(makesvg(percentage, inner_text));
          });
          return this;
      };
  
  }( jQuery ));
  
  $(function () {
       $('.circlechart').circlechart();
  });