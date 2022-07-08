

const hamburger= document.querySelector('.hamburger');
const navMenu= document.querySelector('.nav-menu');

  hamburger.addEventListener('click', myfun);

  function myfun() {
    //   hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    // console.log("hello");
    
  }

  const navlink= document.querySelectorAll('.nav-link');

  navlink.forEach(n => n.addEventListener("click", closeMenu));


  function closemenu() {
    hamburger.classList.remove('active');
    navMenu.clsassList.remove('active');
  }
