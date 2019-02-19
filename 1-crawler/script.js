(function () {
  const body = document.querySelector('body');
  const mobNavBtn = document.querySelector('.js-mob-nav-btn');
  const mobNavBtnIcon = mobNavBtn.querySelectorAll('.mob-nav_icon');
  const mobNav = document.querySelector('.js-mob-nav');
  const mobNavLinks = mobNav.querySelectorAll('a');
  const mobNavOverlay = mobNav.querySelector('.mob-nav_overlay');

  function toggleMobNav() {
    /*mobNav.classList.toggle('fade-out');
    mobNav.classList.toggle('fade-in');*/
    body.classList.toggle('non-scroll');
    mobNav.classList.toggle('open');
    mobNavOverlay.classList.toggle('hide');
    mobNavBtnIcon.forEach(icon => {
      icon.classList.toggle('fade-out');
      icon.classList.toggle('fade-in');
    });
  }

  mobNavBtn.addEventListener('click', () => {
    toggleMobNav();
  });

  mobNavLinks.forEach(el => el.addEventListener('click', () => {
    toggleMobNav();
  }));

  mobNavOverlay.addEventListener('click', () => {
    toggleMobNav();
  });
}());
