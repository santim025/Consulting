/**
* Template Name: Consulting
* Template URL: https://bootstrapmade.com/consulting-business-website-template/
* Updated: Nov 17 2023 with Bootstrap v5.3.2
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Función auxiliar para debug del menú móvil
   */
  function debugMobileNav() {
    console.log('Verificando menú móvil...');
    const btn = document.querySelector('.mobile-nav-toggle');
    const navmenu = document.querySelector('#navmenu');
    console.log('Botón encontrado:', !!btn);
    console.log('Navmenu encontrado:', !!navmenu);
    if (btn) {
      console.log('Clases del botón:', btn.className);
    }
  }

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle - Versión mejorada
   */
  function initMobileNav() {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    
    function mobileNavToogle(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      const body = document.querySelector('body');
      const navmenu = document.querySelector('#navmenu');
      
      if (body && navmenu) {
        body.classList.toggle('mobile-nav-active');
        
        if (mobileNavToggleBtn) {
          mobileNavToggleBtn.classList.toggle('bi-list');
          mobileNavToggleBtn.classList.toggle('bi-x');
        }
        
        console.log('Menú móvil toggled:', body.classList.contains('mobile-nav-active'));
      }
    }
    
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
      mobileNavToggleBtn.addEventListener('touchstart', mobileNavToogle, { passive: false });
      console.log('Event listeners añadidos al botón del menú móvil');
    } else {
      console.warn('No se encontró el botón del menú móvil (.mobile-nav-toggle)');
    }
    
    return mobileNavToogle;
  }
  
  // Inicializar cuando el DOM esté listo
  let mobileNavToogle;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      mobileNavToogle = initMobileNav();
      debugMobileNav();
    });
  } else {
    mobileNavToogle = initMobileNav();
    debugMobileNav();
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  function setupNavMenuLinks() {
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });
  }
  
  // Ejecutar inmediatamente si el DOM ya está listo, sino esperar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupNavMenuLinks);
  } else {
    setupNavMenuLinks();
  }

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();