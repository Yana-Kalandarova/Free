(function () {
  const desktop = window.matchMedia('(min-width: 1200px)');
  const body = document.querySelector('body');
  const mobNavBtn = document.querySelector('.js-mob-nav-btn');
  const mobNavBtnIcon = mobNavBtn.querySelectorAll('.mob-nav_icon');
  const mobNav = document.querySelector('.js-mob-nav');
  const mobNavLinks = mobNav.querySelectorAll('a');
  const mobNavOverlay = mobNav.querySelector('.mob-nav_overlay');
  const tabs = document.querySelectorAll('.js-tabs .js-tab-toggler');

  function toggleMobNav() {
    body.classList.toggle('non-scroll');
    mobNav.classList.toggle('open');
    mobNavOverlay.classList.toggle('hide');
    mobNavBtnIcon.forEach(icon => {
      icon.classList.toggle('test');
    });
  }

  mobNavBtn.addEventListener('click', toggleMobNav);
  mobNavLinks.forEach(el => el.addEventListener('click', toggleMobNav));
  mobNavOverlay.addEventListener('click', toggleMobNav);

  desktop.addEventListener('change', e => {
    console.log(e.matches);
    if (e.matches) {
      mobNavLinks.forEach(el => el.removeEventListener('click', toggleMobNav));
    } else {
      mobNavBtn.addEventListener('click', toggleMobNav);
      mobNavLinks.forEach(el => el.addEventListener('click', toggleMobNav));
      mobNavOverlay.addEventListener('click', toggleMobNav);
    }
  });

  function toggleTab (e) {
    const currToggler = e.currentTarget;
    const togglerList = currToggler.parentElement;
    const tabList = togglerList.parentElement.parentElement;
    const contentList = tabList.querySelector('.js-tab-content-list');
    const activeToggler = togglerList.querySelector('.active');

    if (currToggler !== activeToggler) {
      const href = currToggler.querySelector('a').getAttribute('href');
      const activeContent = contentList.querySelector('.active');
      const currContent = contentList.querySelector(href);

      activeToggler.classList.remove('active');
      activeContent.classList.remove('active');
      currToggler.classList.add('active');
      currContent.classList.add('active');
    }

    e.preventDefault();
  }

  tabs.forEach(tab => tab.addEventListener('click', e => toggleTab(e), false));
}());
